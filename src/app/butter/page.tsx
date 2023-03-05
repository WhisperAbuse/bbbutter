'use client';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Footer from '@/shared/Footer';
import Navigation from '@/shared/Navigation';
import ScrollingPartners from '@/shared/ScrollingPartners';
import PageContentWrap from '@/uikit/PageContentWrap';

import CommunityParagraph from './components/CommunityParagraph';
import Features from './components/Features';
import ShowcaseVideo from './components/Features/ShowcaseVideo';
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
        <ShowcaseVideo />
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
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Main>
  );
}

const Main = styled.main``;

const NavWrapper = styled.div`
  z-index: 10;
  position: relative;
`;

const HeroWrapper = styled(PageContentWrap)``;

const VideoWrapper = styled(PageContentWrap)`
  width: 100%;
  margin-top: -40px;
  position: relative;
`;

const ScrollingPartnersWrapper = styled.div`
  padding: 80px 0;

  @media ${screen.tablet} {
    padding: 170px 0;
  }
`;

const LargeParagraphWrapper = styled(PageContentWrap)``;

const FeatureWrapper = styled(PageContentWrap)`
  margin-top: 200px;
  padding: 0;

  @media ${screen.laptop} {
    padding: 0 20px;
  }

  @media ${screen.laptopL} {
    padding: 0 60px;
  }
`;

const ReviewsWrapper = styled(PageContentWrap)`
  margin-top: 150px;
  padding: 0;

  @media ${screen.laptop} {
    padding: 0 20px;
  }

  @media ${screen.laptopL} {
    padding: 0 60px;
  }
`;

const SpinWordsWrapper = styled(PageContentWrap)`
  margin-top: 70px;

  @media ${screen.laptop} {
    padding: 0 150px;
    margin-top: 150px;
  }

  @media ${screen.laptopL} {
    padding: 0 250px;
  }
`;

const CommunityParagraphWrapper = styled(PageContentWrap)`
  margin-top: 50px;

  @media ${screen.laptop} {
    margin-top: 150px;
  }
`;

const WhatTheFAQWrapper = styled(PageContentWrap)`
  margin-top: 180px;

  @media ${screen.laptop} {
    margin-top: 250px;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 150px;
`;
