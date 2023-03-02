import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import FeaturePaper from '@/shared/FeaturePaper';
import PlanCheckoutImg from 'public/media/features/plan_checkout.webp';
import PlanDottedImg from 'public/media/features/plan_dotted_pattern.png';
import PlanReflectionImg from 'public/media/features/plan_reflection.webp';
import PlanWelcomeImg from 'public/media/features/plan_welcome.webp';

import FeatureContent from '../Content';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeaturePlan({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Plan" />
      <StyledFeaturePlan>
        <ImagesWrapper>
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
        </ImagesWrapper>
        <FeatureContentWrapper>
          <FeatureContent
            heading="Prepare sessions that practically run themselves"
            paragraph="Structured sessions lead to better outcomes. Set up the perfect flow with a time-boxed agenda, pre-loaded tools, and a reusable team library."
            buttonText="Learn more"
          />
        </FeatureContentWrapper>
      </StyledFeaturePlan>
    </div>
  );
}

const ImagesWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  position: relative;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
`;

const CheckoutImageWrapper = styled(AbsoluteWrapper)`
  top: 45%;
  left: 30%;
  max-width: 200px;
`;

const ReflectionImageWrapper = styled(AbsoluteWrapper)`
  top: 30%;
  left: 0;
  max-width: 200px;
`;

const WelcomeImageWrapper = styled(AbsoluteWrapper)`
  top: 13%;
  left: 33%;
  max-width: 200px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;
`;

const StyledFeaturePlan = styled(FeaturePaper)`
  background-color: ${(p) => p.theme['light-purple']};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;
`;

export default FeaturePlan;
