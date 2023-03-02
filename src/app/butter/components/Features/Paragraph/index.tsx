import { PropsWithChildren, ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Typography from '@/uikit/Typography';

interface IProps {
  className?: string;
}

function FeatureParagraphBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return (
    <FeatureParagraphContainer className={className}>
      {children}
    </FeatureParagraphContainer>
  );
}

const FeatureParagraph = styled(FeatureParagraphBase)``;

const FeatureParagraphContainer = styled(Typography)`
  font-size: 18px;
  font-weight: 300;

  @media ${screen.laptop} {
    font-size: 22px;
  }
`;

export default FeatureParagraph;
