import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";

interface Props {
  render: (
    index: number,
    wasInView: boolean, // Has item ever in view
    wasRendered: boolean, // Has item ever in view and removed from DOM
  ) => ReactNode;
  totalCount: number;
  rowHeight: number;
  startMargin?: number;
  rowGap?: number;
  paddingCount?: number;
}
export const ViewPortRenderList: FC<Props> = ({
  render,
  totalCount,
  rowHeight,
  startMargin = 0,
  rowGap = 0,
  paddingCount = 0,
}) => {
  /** At least once in view port */
  const [wasInViewIndex, setWasInViewIndex] = useState(new Set<number>());

  /** In view port and removed from DOM */
  const [wasRenderedIndex, setWasRenderedIndex] = useState(new Set<number>());

  /** Index of item that has extra height */
  const [extraHeightIndex, setExtraHeightIndex] = useState<[number, number][]>(
    [],
  );

  const [scrollY, setScrollY] = useState(0);
  const [viewPortHeight, setViewPortHeight] = useState(0);
  const itemHeight = useMemo(() => rowHeight + rowGap, [rowHeight, rowGap]);

  /** Number of items to render */
  const additionalItemCount = useMemo(
    () => Math.ceil(startMargin / itemHeight),
    [startMargin, itemHeight],
  );
  const visibleCount = useMemo(
    () =>
      Math.ceil(viewPortHeight / itemHeight) +
      additionalItemCount +
      paddingCount,
    [viewPortHeight, itemHeight, additionalItemCount, paddingCount],
  );

  /** Start index of items to render */
  const startIndex = useMemo(
    () => Math.floor(scrollY / itemHeight) - additionalItemCount,
    [scrollY, itemHeight, additionalItemCount],
  );

  /** Top and Bottom height instead of rendering item */
  const extraTopPadding = useMemo(
    () =>
      extraHeightIndex.reduce((acc, [i, h]) => {
        if (i < startIndex) return acc + h;
        return acc;
      }, 0),
    [extraHeightIndex, startIndex],
  );
  const totalPadding = useMemo(
    () => (totalCount - visibleCount) * itemHeight - rowGap + extraTopPadding,
    [totalCount, visibleCount, itemHeight, rowGap, extraTopPadding],
  );

  const topPadding = Math.max(startIndex * itemHeight, 0) + extraTopPadding;
  const bottomPadding = Math.max(totalPadding - topPadding, 0);

  useEffect(() => {
    setViewPortHeight(window.innerHeight);

    function handler() {
      setScrollY(window.scrollY - startMargin);
    }

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [startMargin]);

  /** Check if item is in view port */
  useEffect(() => {
    const items = document.querySelectorAll("[data-vprl-index]");
    const currentRenderedIndex: number[] = [];

    items.forEach((item) => {
      const index = Number(item.getAttribute("data-vprl-index"));
      currentRenderedIndex.push(index);
    });

    wasInViewIndex.forEach((index) => {
      if (!currentRenderedIndex.includes(index)) {
        setWasRenderedIndex((prev) => new Set(prev).add(index));
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-vprl-index"));
        if (entry.isIntersecting) {
          setWasInViewIndex((prev) => new Set(prev).add(index));
        }
      });
    });

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [startIndex]);

  const visibleChildren = useMemo(
    () =>
      new Array(visibleCount).fill(null).map((_, _i) => {
        const index = _i + startIndex;
        if (index < 0 || index > totalCount - 1) return null;

        const wasInView = wasInViewIndex.has(index);
        const wasRendered = wasRenderedIndex.has(index);

        return (
          <Item
            key={index}
            index={index}
            marginBottom={rowGap}
            onMount={(height) => {
              if (height - rowHeight > 5) {
                setExtraHeightIndex((prev) => {
                  if (prev.find(([i]) => i === index)) return prev;
                  return [...prev, [index, height - rowHeight]];
                });
              } else {
                setExtraHeightIndex((prev) =>
                  prev.filter(([i]) => i !== index),
                );
              }
            }}
          >
            {render(index, wasInView, wasRendered)}
          </Item>
        );
      }),
    [visibleCount, startIndex, totalCount, rowGap, render],
  );

  return (
    <>
      <div
        style={{
          height: `${topPadding}px`,
          backgroundColor: "transparent",
        }}
      />
      {visibleChildren}
      <div
        style={{
          height: `${bottomPadding}px`,
          backgroundColor: "transparent",
        }}
      />
    </>
  );
};

function Item({
  index,
  children,
  marginBottom,
  onMount,
}: {
  index: number;
  marginBottom: number;
  children: ReactNode;
  onMount: (height: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      const el = ref.current;
      if (!el) return;
      const height = el.getBoundingClientRect().height;
      onMount(height - marginBottom);
    };
  });

  return (
    <div
      ref={ref}
      key={index}
      data-vprl-index={index}
      style={{
        marginBottom,
      }}
    >
      {children}
    </div>
  );
}
