import { ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';

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

  @media ${screen.tablet} {
    font-size: 125px;
  }

  @media ${screen.laptopL} {
    font-size: 200px;
  }
`;

export default FeatureTitle;
