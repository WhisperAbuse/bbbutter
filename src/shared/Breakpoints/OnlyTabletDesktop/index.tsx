import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';

interface IProps {
  className?: string;
}

function OnlyTabletDesktopBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const OnlyTabletDesktop = styled(OnlyTabletDesktopBase)``;

const Container = styled.div`
  display: none;

  @media ${screen.tablet} {
    display: block;
  }
`;

export default OnlyTabletDesktop;
