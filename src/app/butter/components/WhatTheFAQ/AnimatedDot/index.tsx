import { ReactElement } from "react";

import styled from "styled-components";

import Heading from "@/uikit/Heading";

interface IProps {
  className?: string;
}

function AnimatedDotBase({ className }: IProps): ReactElement {
  return <FaqHeading className={className}>.</FaqHeading>;
}

const AnimatedDot = styled(AnimatedDotBase)`
  position: absolute;
  right: 0;
`;

const FaqHeading = styled(Heading)`
  font-size: 100px;
  margin-top: -5px;
  position: relative;
`;

export default AnimatedDot;
