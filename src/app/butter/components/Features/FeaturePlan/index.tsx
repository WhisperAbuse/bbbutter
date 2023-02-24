import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import FeaturePaper from "@/shared/FeaturePaper";
import Button from "@/uikit/Button";
import Heading from "@/uikit/Heading";
import Typography from "@/uikit/Typography";
import PlanDottedImg from "public/media/features/plan_dotted_pattern.png";

interface IProps {
  className?: string;
}

function FeaturePlan({ className }: IProps): ReactElement {
  return (
    <div>
      <Heading asComponent="h2" fontSize={100}>
        <span>Plan</span>
        <span>.</span>
      </Heading>
      <StyledFeaturePlan>
        <StyledImage src={PlanDottedImg} alt="" />
        <FeatureHeading>
          Prepare sessions that practically run themselves
        </FeatureHeading>
        <FeatureParagraph>
          Structured sessions lead to better outcomes. Set up the perfect flow
          with a time-boxed agenda, pre-loaded tools, and a reusable team
          library.
        </FeatureParagraph>
        <ButtonWrapper>
          <Button variant="primary-bg-empty">Learn more</Button>
        </ButtonWrapper>
      </StyledFeaturePlan>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
`;

const StyledFeaturePlan = styled(FeaturePaper)`
  background-color: ${(p) => p.theme["light-purple"]};
`;

const FeatureHeading = styled(Heading)`
  margin-top: 50px;
  font-size: 32px;
`;

const FeatureParagraph = styled(Typography)`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 300;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

export default FeaturePlan;
