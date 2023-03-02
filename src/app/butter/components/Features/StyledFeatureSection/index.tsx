import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import FeaturePaper from '@/shared/FeaturePaper';

interface IProps {
  className?: string;
}

function StyledFeatureSectionBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const StyledFeatureSection = styled(StyledFeatureSectionBase)``;

const Container = styled.div`
  @media ${screen.laptop} {
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;
  }
`;
export default StyledFeatureSection;
