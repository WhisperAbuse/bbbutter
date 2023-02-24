import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import FeaturePaper from "@/shared/FeaturePaper";
import RecapDottedImg from "public/media/features/recap_dotted_pattern.png";

import FeatureContent from "../Content";
import Title from "../Title";

interface IProps {
  className?: string;
}

function FeatureRecap({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Recap" />
      <StyledFeatureRecap>
        <StyledImage src={RecapDottedImg} alt="" />
        <FeatureContentWrapper>
          <FeatureContent
            heading="Don’t forget your takeaways"
            paragraph="Summarize your sessions and capture outcomes in seconds. Access and share your recordings, personal notes, chat logs, and poll results from any session—all from one dashboard."
            buttonText="Take a look"
          />
        </FeatureContentWrapper>
      </StyledFeatureRecap>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;
`;

const StyledFeatureRecap = styled(FeaturePaper)`
  background-color: ${(p) => p.theme.peach};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;
`;

export default FeatureRecap;
