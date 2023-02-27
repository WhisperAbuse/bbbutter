'use client';

import styled from 'styled-components';

import Navigation from '@/shared/Navigation';
import ScrollingPartners from '@/shared/ScrollingPartners';
import PageContentWrap from '@/uikit/PageContentWrap';

import CommunityParagraph from './components/CommunityParagraph';
import Features from './components/Features';
import Hero from './components/Hero';
import LargeParagraph from './components/LargeParagraph';
import Reviews from './components/Reviews';
import SpinWords from './components/SpinWords';
import WhatTheFAQ from './components/WhatTheFAQ';

export default function Butter() {
  return (
    <Main>
      <NavWrapper>
        <Navigation />
      </NavWrapper>
      <Hero />
      <VideoWrapper>
        <MobileVideo controls>
          Sorry, your browser doesn&apos;t support embedded videos.
          <source type="video/webm" src="/public/Product+Explainer.webm" />
          <source type="video/mp4" src="/public/butter-explainer-01-2023.mp4" />
        </MobileVideo>
      </VideoWrapper>
      <ScrollingPartnersWrapper>
        <ScrollingPartners />
      </ScrollingPartnersWrapper>
      <LargeParagraphWrapper>
        <LargeParagraph />
      </LargeParagraphWrapper>
      <FeatureWrapper>
        <Features />
      </FeatureWrapper>
      <ReviewsWrapper>
        <Reviews />
      </ReviewsWrapper>
      <SpinWordsWrapper>
        <SpinWords />
      </SpinWordsWrapper>
      <CommunityParagraphWrapper>
        <CommunityParagraph />
      </CommunityParagraphWrapper>
      <WhatTheFAQWrapper>
        <WhatTheFAQ />
      </WhatTheFAQWrapper>
    </Main>
  );
}

const Main = styled.main`
  padding-bottom: 250px;
`;

const NavWrapper = styled(PageContentWrap)`
  z-index: 10;
  position: relative;
`;

const MobileVideo = styled.video`
  width: 100%;
  border-radius: 24px;
`;

const VideoWrapper = styled(PageContentWrap)`
  width: 100%;
  margin-top: -40px;
  position: relative;
`;

const ScrollingPartnersWrapper = styled.div`
  padding: 80px 0;
`;

const LargeParagraphWrapper = styled(PageContentWrap)``;

const FeatureWrapper = styled.div`
  margin-top: 200px;
`;

const ReviewsWrapper = styled.div`
  margin-top: 150px;
`;

const SpinWordsWrapper = styled(PageContentWrap)`
  margin-top: 70px;
`;

const CommunityParagraphWrapper = styled(PageContentWrap)`
  margin-top: 50px;
`;

const WhatTheFAQWrapper = styled(PageContentWrap)`
  margin-top: 100px;
`;
