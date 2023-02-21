import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

type FontSize = 'sm' | 'base' | 'md' | 'lg' | 'xl';

interface IProps {
  fontSize?: FontSize;
}

export default function Typography({
  children,
  fontSize = 'base',
}: PropsWithChildren<IProps>): ReactNode {
  return <StyledTypography fontSize={fontSize}>{children}</StyledTypography>;
}

const StyledTypography = styled.p`
  font-family: 'Gt eesti display', sans-serif;
  color: ${(p) => p.theme.dark};
  text-align: center;
  font-size: 18px;
  line-height: 140%;
  font-weight: 300;
`;
