import { ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Button from '@/uikit/Button';

import FeatureHeading from '../Heading';
import FeatureParagraph from '../Paragraph';

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
        <StyledButton variant="primary-bg-empty">{buttonText}</StyledButton>
      </div>
    </Container>
  );
}

const FeatureContent = styled(FeatureContentBase)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${screen.laptop} {
    max-width: 700px;
  }
`;

const StyledButton = styled(Button)`
  font-size: 16px;

  @media ${screen.laptop} {
    font-size: 18px;
  }
`;

export default FeatureContent;
