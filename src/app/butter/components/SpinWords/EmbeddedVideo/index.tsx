import { ReactElement } from 'react';

import styled from 'styled-components';

interface IProps {
  className?: string;
}

function EmbeddedVideoBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <VideoFrame
        src="https://www.youtube.com/embed/Wy7bGRuPCvU"
        title="The Butter Community through our eyes"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></VideoFrame>
    </Container>
  );
}

const EmbeddedVideo = styled(EmbeddedVideoBase)``;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default EmbeddedVideo;
