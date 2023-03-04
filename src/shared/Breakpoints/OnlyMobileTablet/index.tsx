import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';

interface IProps {
  className?: string;
}

function OnlyMobileTabletBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const OnlyMobileTablet = styled(OnlyMobileTabletBase)``;

const Container = styled.div`
  @media ${screen.laptop} {
    display: none;
  }
`;

export default OnlyMobileTablet;
