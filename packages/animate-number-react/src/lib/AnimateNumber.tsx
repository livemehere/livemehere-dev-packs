import { FC, useEffect, useMemo, useRef, useState } from "react";
import AnimateNumberCore, { defaultOptions, Options } from "./core.ts";

interface Props {
  children: string | number;
}
export const AnimateNumber: FC<Props & Options> = ({
  children,
  ...options
}) => {
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
      options.formatter,
      options.decimal,
      options.lastDigitDelay,
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
    console.log("create new instance", animationCore.current);
  }, [combinedOptions]);

  useEffect(() => {
    if (!animationCore.current) return;
    if (combinedOptions.animation) {
      if (initialStarted) {
        console.log("update", children);
        animationCore.current.update(+children);
      } else {
        console.log("start", children);
        setInitialStarted(true);
        animationCore.current.start();
      }
    } else {
      console.log("set to end", children);
      animationCore.current.setToEnd();
    }
  }, [children]);
  return <span ref={ref} />;
};
