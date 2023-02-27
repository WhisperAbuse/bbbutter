import { forwardRef, PropsWithChildren } from 'react';

import styled from 'styled-components';

type FontSize = 'sm' | 'base' | 'md' | 'lg' | 'xl';
type AsComponent = 'p' | 'span' | 'div';

interface IProps {
  fontSize?: FontSize;
  asComponent?: AsComponent;
  className?: string;
}

const TypographyBase = forwardRef<
  HTMLParagraphElement | HTMLDivElement | HTMLSpanElement,
  PropsWithChildren<IProps>
>(({ children, asComponent = 'p', className }) => {
  const Component = asComponent;
  return <Component className={className}>{children}</Component>;
});

TypographyBase.displayName = 'TypographyBase';

const Typography = styled(TypographyBase)`
  font-family: 'Gt eesti display', sans-serif;
  color: ${(p) => p.theme.dark};
`;

export default Typography;
