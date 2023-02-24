import { ReactElement } from "react";

import styled from "styled-components";

import FeaturePlan from "./FeaturePlan";
import FeatureRun from "./FeatureRun";

interface IProps {
  className?: string;
}

function FeaturesBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <FeaturePlan />
      <FeatureRun />
    </Container>
  );
}

const Features = styled(FeaturesBase)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
export default Features;
