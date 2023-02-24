import { PropsWithChildren, ReactElement } from "react";

import styled from "styled-components";

interface IProps {
  className?: string;
  radius?: string;
}

function PaperBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <div className={className}>{children}</div>;
}

const Paper = styled(PaperBase)`
  ${(p) => p.radius && `border-radius: ${p.radius}`}
`;

export default Paper;
