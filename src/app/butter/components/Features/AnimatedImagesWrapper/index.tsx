import { ReactElement, PropsWithChildren } from 'react';

import { motion, MotionValue } from 'framer-motion';
import styled from 'styled-components';

interface IProps {
  className?: string;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

function AnimatedImagesWrapperBase({
  className,
  children,
  rotateX,
  rotateY,
}: PropsWithChildren<IProps>): ReactElement {
  return (
    <ImagesWrapper className={className}>
      <MotionDiv
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        {children}
      </MotionDiv>
    </ImagesWrapper>
  );
}

const AnimatedImagesWrapper = styled(AnimatedImagesWrapperBase)``;

const MotionDiv = styled(motion.div)`
  transform-style: preserve-3d;
  transition: transform 0.3s ease-out;
`;

const ImagesWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  flex-shrink: 0;
`;

export default AnimatedImagesWrapper;
