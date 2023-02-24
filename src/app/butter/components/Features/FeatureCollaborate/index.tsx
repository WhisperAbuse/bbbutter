import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import FeaturePaper from "@/shared/FeaturePaper";
import CollaborateDottedImg from "public/media/features/collaborate_dotted_pattern.png";

import FeatureContent from "../Content";
import Title from "../Title";

interface IProps {
  className?: string;
}

function FeatureCollaborate({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Colla&#13;borate" />
      <StyledFeatureCollaborate>
        <StyledImage src={CollaborateDottedImg} alt="" />
        <FeatureContentWrapper>
          <FeatureContent
            heading="One workspace for all your team’s sessions"
            paragraph="Your Butter workspace gives your team one place to create rooms, share templates, and access recaps. Save on session setup time, create team-wide consistency, and keep tabs on your team’s sessions."
            buttonText="Create workspace"
          />
        </FeatureContentWrapper>
      </StyledFeatureCollaborate>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;
`;

const StyledFeatureCollaborate = styled(FeaturePaper)`
  background-color: ${(p) => p.theme["light-pink"]};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;
`;

export default FeatureCollaborate;
