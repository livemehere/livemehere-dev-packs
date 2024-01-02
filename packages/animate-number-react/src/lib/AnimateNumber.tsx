import { FC, useEffect, useMemo, useRef, useState } from "react";
import AnimateNumberCore, { defaultOptions, Options } from "./core.ts";

interface Props {
  children: string | number;
}
export const AnimateNumber: FC<
  Props & Omit<Options, "lastDigitDelay" | "formatter">
> = ({ children, ...options }) => {
  const combinedOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    [
      options.animation,
      options.duration,
      options.slideAnimation,
      options.easing,
      options.decimal,
      options.startVal,
    ],
  );
  const ref = useRef<HTMLSpanElement>(null);
  const animationCore = useRef<AnimateNumberCore>();
  const [initialStarted, setInitialStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    animationCore.current = new AnimateNumberCore(
      ref.current,
      +children,
      combinedOptions,
    );
    animationCore.current!.setToEnd();
  }, [combinedOptions]);

  useEffect(() => {
    if (!animationCore.current) return;
    if (combinedOptions.animation) {
      if (initialStarted) {
        animationCore.current.update(+children);
      } else {
        setInitialStarted(true);
        animationCore.current.start();
      }
    } else {
      animationCore.current.setToEnd();
    }
  }, [children]);
  return <span ref={ref} />;
};
