import { ReactElement } from "react";

import styled from "styled-components";

import FeaturePlan from "./FeaturePlan";

interface IProps {
  className?: string;
}

function FeaturesBase({ className }: IProps): ReactElement {
  return (
    <div className={className}>
      <FeaturePlan />
    </div>
  );
}

const Features = styled(FeaturesBase)``;

export default Features;
