import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import Paper from "@/uikit/Paper";
import LeapRobImg from "public/media/reviews/leap_rob_hamblen.png";

import MaskedPhoto from "./MaskedPhoto";

interface IProps {
  className?: string;
}

function ReviewTemplateBase({ className }: IProps): ReactElement {
  return (
    <Container>
      <MaskedPhoto PersonImg={LeapRobImg} />
    </Container>
  );
}

const ReviewTemplate = styled(ReviewTemplateBase)``;

const Container = styled(Paper)`
  border-radius: 80px;
  background-color: ${(p) => p.theme.main};
  padding: 50px 32px 80px;
`;

export default ReviewTemplate;
