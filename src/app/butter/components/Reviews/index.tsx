import { ReactElement } from "react";

import styled from "styled-components";

import ReviewTemplate from "./ReviewTemplate";

interface IProps {
  className?: string;
}

function ReviewsBase({ className }: IProps): ReactElement {
  return (
    <div className={className}>
      <ReviewTemplate />
    </div>
  );
}

const Reviews = styled(ReviewsBase)``;

export default Reviews;
