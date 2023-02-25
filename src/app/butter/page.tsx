"use client";

import styled from "styled-components";

import Navigation from "@/shared/Navigation";
import ScrollingPartners from "@/shared/ScrollingPartners";

import Features from "./components/Features";
import Hero from "./components/Hero";
import LargeParagraph from "./components/LargeParagraph";
import Reviews from "./components/Reviews";

export default function Butter() {
  return (
    <main>
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
    </main>
  );
}

const NavWrapper = styled.div`
  z-index: 10;
  position: relative;
`;

const MobileVideo = styled.video`
  width: 100%;
  border-radius: 24px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 20px;
  position: relative;
`;

const ScrollingPartnersWrapper = styled.div`
  padding: 80px 0;
`;

const LargeParagraphWrapper = styled.div`
  padding: 0 20px;
`;

const FeatureWrapper = styled.div`
  margin-top: 200px;
`;

const ReviewsWrapper = styled.div`
  margin-top: 150px;
`;
