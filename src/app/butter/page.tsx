"use client";
import styled from "styled-components";

import Navigation from "@/shared/Navigation";
import Hero from "./components/Hero";

export default function Butter() {
  return (
    <main>
      <Navigation />
      <Hero />
      <VideoWrapper>
        <MobileVideo controls>
          Sorry, your browser doesn&apos;t support embedded videos.
          <source type="video/webm" src="/public/Product+Explainer.webm" />
          <source type="video/mp4" src="/public/butter-explainer-01-2023.mp4" />
        </MobileVideo>
      </VideoWrapper>
    </main>
  );
}

const MobileVideo = styled.video`
  width: 100%;
  border-radius: 24px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 20px;
`;
