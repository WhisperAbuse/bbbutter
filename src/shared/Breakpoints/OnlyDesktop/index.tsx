import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';

interface IProps {
  className?: string;
}

function OnlyDesktopBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const OnlyDesktop = styled(OnlyDesktopBase)``;

const Container = styled.div`
  display: none;

  @media ${screen.laptop} {
    display: block;
  }
`;

export default OnlyDesktop;
