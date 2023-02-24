import { ReactElement } from "react";

import styled from "styled-components";

import Button from "@/uikit/Button";

import FeatureHeading from "../Heading";
import FeatureParagraph from "../Paragraph";

interface IProps {
  className?: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}

function FeatureContentBase({
  className,
  heading,
  paragraph,
  buttonText,
}: IProps): ReactElement {
  return (
    <Container className={className}>
      <FeatureHeading>{heading} </FeatureHeading>
      <FeatureParagraph>{paragraph}</FeatureParagraph>
      <div>
        <Button variant="primary-bg-empty">{buttonText}</Button>
      </div>
    </Container>
  );
}

const FeatureContent = styled(FeatureContentBase)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export default FeatureContent;
