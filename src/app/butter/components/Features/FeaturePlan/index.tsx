'use client';
import { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';

import {
  motion,
  useMotionValue,
  useTransform,
  circOut,
  circInOut,
  cubicBezier,
} from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import useAnimatedImages from '@/hooks/useAnimatedImages';
import FeaturePaper from '@/shared/FeaturePaper';
import PlanCheckoutImg from 'public/media/features/plan_checkout.webp';
import PlanDottedImg from 'public/media/features/plan_dotted_pattern.png';
import PlanReflectionImg from 'public/media/features/plan_reflection.webp';
import PlanWelcomeImg from 'public/media/features/plan_welcome.webp';

import AnimatedImagesWrapper from '../AnimatedImagesWrapper';
import FeatureContent from '../Content';
import StyledFeatureSection from '../StyledFeatureSection';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeaturePlan({ className }: IProps): ReactElement {
  const { containerRef, onMouseMove, rotateX, rotateY, setInitialAnimation } =
    useAnimatedImages();

  return (
    <div
      onMouseMove={onMouseMove}
      ref={containerRef}
      onMouseLeave={setInitialAnimation}
    >
      <Title title="Plan" />
      <StyledFeaturePlan>
        <StyledFeatureSection>
          <AnimatedImagesWrapper rotateX={rotateX} rotateY={rotateY}>
            <StyledImage src={PlanDottedImg} alt="" />
            <ReflectionImageWrapper>
              <Image src={PlanReflectionImg} alt="" />
            </ReflectionImageWrapper>
            <CheckoutImageWrapper>
              <Image src={PlanCheckoutImg} alt="" />
            </CheckoutImageWrapper>
            <WelcomeImageWrapper>
              <Image src={PlanWelcomeImg} alt="" />
            </WelcomeImageWrapper>
          </AnimatedImagesWrapper>

          <FeatureContentWrapper>
            <FeatureContent
              heading="Prepare sessions that practically run themselves"
              paragraph="Structured sessions lead to better outcomes. Set up the perfect flow with a time-boxed agenda, pre-loaded tools, and a reusable team library."
              buttonText="Learn more"
            />
          </FeatureContentWrapper>
        </StyledFeatureSection>
      </StyledFeaturePlan>
    </div>
  );
}

const AbsoluteWrapper = styled.div`
  position: absolute;
`;

const CheckoutImageWrapper = styled(AbsoluteWrapper)`
  top: 45%;
  left: 30%;
  max-width: 50%;
  transform: translate3d(0, 0, 350px);
`;

const ReflectionImageWrapper = styled(AbsoluteWrapper)`
  top: 30%;
  left: 0;
  max-width: 50%;
  transform: translate3d(0, 0, 300px);
`;

const WelcomeImageWrapper = styled(AbsoluteWrapper)`
  top: 13%;
  left: 33%;
  max-width: 50%;
  transform: translate3d(0, 0, 400px);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;

  @media ${screen.laptop} {
    max-width: 600px;
  }
`;

const StyledFeaturePlan = styled(FeaturePaper)`
  background-color: ${(p) => p.theme['light-purple']};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;

  @media ${screen.laptop} {
    margin-top: 0;
  }
`;

export default FeaturePlan;
