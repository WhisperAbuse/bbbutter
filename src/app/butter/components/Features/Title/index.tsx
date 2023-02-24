import { ReactElement } from "react";

import styled from "styled-components";

import Heading from "@/uikit/Heading";

interface IProps {
  className?: string;
  title: string;
}

function FeatureTitleBase({ className, title }: IProps): ReactElement {
  return (
    <Container asComponent="h2">
      <span>{title}</span>
      <span>.</span>
    </Container>
  );
}

const FeatureTitle = styled(FeatureTitleBase)``;

const Container = styled(Heading)`
  font-size: 100px;
`;

export default FeatureTitle;
