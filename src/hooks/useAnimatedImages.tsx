import { MouseEvent, useRef } from 'react';

import { useMotionValue, useTransform } from 'framer-motion';

interface IProps {
  defaultX: number;
  defaultY: number;
}

function useAnimatedImages(props: IProps = { defaultX: 200, defaultY: 200 }) {
  const { defaultX, defaultY } = props;
  const x = useMotionValue(defaultX);
  const y = useMotionValue(200);

  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(
    y,
    [0, containerRef.current?.clientHeight || defaultY],
    [10, -10]
  );
  const rotateY = useTransform(
    x,
    [0, containerRef.current?.clientWidth || defaultX],
    [-10, 10]
  );

  const handleMouse = (event: MouseEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const setInitialAnimation = () => {
    x.set((containerRef.current?.clientWidth || defaultX) / 2);
    y.set((containerRef.current?.clientHeight || defaultY) / 2);
  };

  return {
    containerRef,
    rotateX,
    rotateY,
    onMouseMove: handleMouse,
    setInitialAnimation,
  };
}

export default useAnimatedImages;
