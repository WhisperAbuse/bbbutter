import { PropsWithChildren, ReactElement, ReactNode } from "react";

import styled from "styled-components";

type FontSize = "sm" | "base" | "md" | "lg" | "xl";
type AsComponent = "p" | "span" | "div";

interface IProps {
  fontSize?: FontSize;
  asComponent?: AsComponent;
  className?: string;
}

function TypographyBase({
  children,
  asComponent = "p",
  className,
}: PropsWithChildren<IProps>): ReactElement {
  const Component = asComponent;
  return <Component className={className}>{children}</Component>;
}

const Typography = styled(TypographyBase)`
  font-family: "Gt eesti display", sans-serif;
  color: ${(p) => p.theme.dark};
`;

export default Typography;
