import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';

interface IProps {
  className?: string;
}

function OnlyMobileBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const OnlyMobile = styled(OnlyMobileBase)``;

const Container = styled.div`
  @media ${screen.tablet} {
    display: none;
  }
`;

export default OnlyMobile;
