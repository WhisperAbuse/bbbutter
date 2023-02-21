'use client';

import Button from '@/shared/Button';
import Heading from '@/shared/Heading';
import Navigation from '@/shared/Navigation';
import Typography from '@/shared/Typography';
import Image from 'next/image';
import styled from 'styled-components';

export default function Butter() {
  return (
    <main>
      <Navigation />
      <Container>
        <HeadingWrapper>
          <Heading>Run more engaging sessions. Get better outcomes.</Heading>
        </HeadingWrapper>
        <Typography>
          Butter’s agenda planner, delightful interactions, and integrated
          collaboration tools let you run super-engaging workshops, trainings,
          and meetings—without juggling a million tools.
        </Typography>
        <HeroButtonsWrapper>
          <Button fullWidth variant="primary-dark">
            Try Butter for free
          </Button>
          <Button fullWidth>Book a demo</Button>
        </HeroButtonsWrapper>
      </Container>
      <VideoWrapper>
        <MobileVideo controls>
          Sorry, your browser doesn't support embedded videos.
          <source type="video/webm" src="/public/Product+Explainer.webm" />
          <source type="video/mp4" src="/public/butter-explainer-01-2023.mp4" />
        </MobileVideo>
      </VideoWrapper>
    </main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  padding: 160px 16px 100px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(p) => p.theme.main};
`;

const HeadingWrapper = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
`;

const HeroButtonsWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`;

const MobileVideo = styled.video`
  width: 100%;
  border-radius: 24px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 20px;
`;
