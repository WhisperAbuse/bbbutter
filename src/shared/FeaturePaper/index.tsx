import { PropsWithChildren, ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';

interface IProps {
  className?: string;
}

function FeaturePaperBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <div className={className}>{children}</div>;
}

const FeaturePaper = styled(FeaturePaperBase)`
  padding: 48px 32px;
  border-radius: 80px;

  @media ${screen.laptop} {
    padding: 80px 60px;
  }
`;

export default FeaturePaper;
