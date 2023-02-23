import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";

import styled from "styled-components";

type AsComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps {
  variant?: "primary" | "secondary";
  fontSize?: number;
  className?: string;
  asComponent?: AsComponent;
}

function Heading({
  children,
  className,
  asComponent = "h2",
}: PropsWithChildren<IProps>): ReactElement {
  const Component = asComponent;

  return <Component className={className}>{children}</Component>;
}

const StyledHeading = styled(Heading)`
  font-family: "Gt eesti display ultra 2", sans-serif;
  font-weight: 800;
  line-height: 1;
  font-size: ${(p) => `${p.fontSize}px`};
`;

export default StyledHeading;
