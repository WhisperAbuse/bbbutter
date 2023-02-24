import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import FeaturePaper from "@/shared/FeaturePaper";
import PlanDottedImg from "public/media/features/plan_dotted_pattern.png";

import FeatureContent from "../Content";
import Title from "../Title";

interface IProps {
  className?: string;
}

function FeaturePlan({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Plan" />
      <StyledFeaturePlan>
        <StyledImage src={PlanDottedImg} alt="" />
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

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;
`;

const StyledFeaturePlan = styled(FeaturePaper)`
  background-color: ${(p) => p.theme["light-purple"]};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;
`;

export default FeaturePlan;
