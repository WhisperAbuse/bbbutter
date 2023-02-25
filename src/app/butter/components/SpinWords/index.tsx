import { ReactElement } from "react";

import styled from "styled-components";

interface IProps {
  className?: string;
}

function SpinWordsBase({ className }: IProps): ReactElement {
  return <div className={className}></div>;
}

const SpinWords = styled(SpinWordsBase)`
  height: 300px;
  background-color: ${(p) => p.theme.peach};
`;

export default SpinWords;
