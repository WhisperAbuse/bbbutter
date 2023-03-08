'use client';
import { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

import PlayButton from './PlayButton';

interface IProps {
  className?: string;
}

function ShowcaseVideoBase({ className }: IProps): ReactElement {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(true);

  const moveX = useTransform(
    x,
    [0, containerRef.current?.clientWidth || 0],
    [-50, 50]
  );
  const moveY = useTransform(
    y,
    [0, containerRef.current?.clientHeight || 0],
    [-50, 50]
  );

  const handleMouse = (event: MouseEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const setInitialAnimation = () => {
    x.set((containerRef.current?.clientWidth || 200) / 2);
    y.set((containerRef.current?.clientHeight || 200) / 2);
  };

  const onPlayButtonClick = () => {
    setIsPlayButtonVisible(false);

    setTimeout(() => {
      startVideo();
    }, 100);
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouse}
      onMouseLeave={setInitialAnimation}
    >
      <Container className={className}>
        {isPlayButtonVisible && (
          <MobileVideo autoPlay muted>
            Sorry, your browser doesn&apos;t support embedded videos.
            <source
              type="video/mp4"
              src="/media/butter-explainer-videos/Product Explainer Short-transcode.mp4"
            />
          </MobileVideo>
        )}
        {!isPlayButtonVisible && (
          <MobileVideo controls ref={videoRef}>
            Sorry, your browser doesn&apos;t support embedded videos.
            <source
              type="video/webm"
              src="/media/butter-explainer-videos/Product+Explainer.webm"
            />
            <source
              type="video/mp4"
              src="/media/butter-explainer-videos/butter-explainer-01-2023.mp4"
            />
          </MobileVideo>
        )}

        {isPlayButtonVisible && (
          <PlayButtonWrapper>
            <MotionDiv
              style={{
                x: moveX,
                y: moveY,
              }}
            >
              <PlayButton onClick={onPlayButtonClick} />
            </MotionDiv>
          </PlayButtonWrapper>
        )}
      </Container>
    </div>
  );
}

const ShowcaseVideo = styled(ShowcaseVideoBase)``;

const Container = styled.div`
  position: relative;
`;

const MotionDiv = styled(motion.div)`
  transition: transform 0.3s ease-out;
`;
const MobileVideo = styled.video`
  width: 100%;
  border-radius: 24px;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default ShowcaseVideo;
