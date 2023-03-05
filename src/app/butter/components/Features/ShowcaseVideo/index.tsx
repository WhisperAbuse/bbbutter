import { ReactElement } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import PlayButton from './PlayButton';

interface IProps {
  className?: string;
}

function ShowcaseVideoBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <MobileVideo controls>
        Sorry, your browser doesn&apos;t support embedded videos.
        <source type="video/webm" src="/public/Product+Explainer.webm" />
        <source type="video/mp4" src="/public/butter-explainer-01-2023.mp4" />
      </MobileVideo>
      <PlayButtonWrapper>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <PlayButton />
        </motion.div>
      </PlayButtonWrapper>
    </Container>
  );
}

const ShowcaseVideo = styled(ShowcaseVideoBase)``;

const Container = styled.div`
  position: relative;
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
