import { PropsWithChildren, ReactElement } from "react";

import styled from "styled-components";

interface IProps {
  className?: string;
}

function FeaturePaperBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <div className={className}>{children}</div>;
}

const FeaturePaper = styled(FeaturePaperBase)`
  padding: 48px 32px;
  border-radius: 80px;
`;

export default FeaturePaper;
