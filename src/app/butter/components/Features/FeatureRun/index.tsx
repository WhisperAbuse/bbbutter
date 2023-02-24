import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import FeaturePaper from "@/shared/FeaturePaper";
import RunDottedImg from "public/media/features/run_bumb_dotted_pattern.png";
import RunTrueDottedImg from "public/media/features/run_true_dotted_pattern.png";

import FeatureContent from "../Content";
import Title from "../Title";

interface IProps {
  className?: string;
}

function FeatureRun({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Run" />
      <StyledFeatureRun>
        <SectionTop>
          <StyledImage src={RunDottedImg} alt="" />
          <FeatureContentWrapper>
            <FeatureContent
              heading="Bump up the energy"
              paragraph="Say goodbye to meeting fatigue. Say hello to participation. Keep everyone engaged with emoji reactions, sound effects, a hand-raise queue, polls, flashcards, music, and GIFs."
              buttonText="Show me the energy"
            />
          </FeatureContentWrapper>
        </SectionTop>
        <SectionBottom>
          <StyledImage src={RunTrueDottedImg} alt="" />
          <FeatureContentWrapper>
            <FeatureContent
              heading="All your favorite facilitation tools, minus all the tabs"
              paragraph="Stop juggling countless apps and tools. Keep everyone focused on one window and one outcome. Access polls, flashcards, videos, music, Miro, MURAL, Google Docs, and more—all inside the Butter window."
              buttonText="See all integrations"
            />
          </FeatureContentWrapper>
        </SectionBottom>
      </StyledFeatureRun>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;
`;

const StyledFeatureRun = styled(FeaturePaper)`
  background-color: ${(p) => p.theme["light-green"]};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;
`;

const SectionTop = styled.div``;
const SectionBottom = styled.div`
  margin-top: 120px;
`;

export default FeatureRun;
