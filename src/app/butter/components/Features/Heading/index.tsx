import { PropsWithChildren, ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';

interface IProps {
  className?: string;
}

function FeatureHeadingBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return (
    <FeatureHeadingContainer className={className}>
      {children}
    </FeatureHeadingContainer>
  );
}

const FeatureHeading = styled(FeatureHeadingBase)``;

const FeatureHeadingContainer = styled(Heading)`
  font-size: 32px;

  @media ${screen.laptop} {
    font-size: 44px;
  }
`;

export default FeatureHeading;
