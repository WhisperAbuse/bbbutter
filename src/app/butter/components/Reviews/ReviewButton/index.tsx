import { ReactElement } from "react";

import Image from "next/image";
import styled, { css } from "styled-components";

import ButtonBase from "@/uikit/BaseButton";
import ReviewButtonImg from "public/media/reviews/Snowflake Paginate.svg";

interface IProps {
  className?: string;
  active?: boolean;
  onClick: () => void;
}

function ReviewButtonBase({
  className,
  active = false,
  onClick,
}: IProps): ReactElement {
  return (
    <StyledButton size="custom" className={className} onClick={onClick}>
      <StyledImage src={ReviewButtonImg} alt="Review pagination button" />
    </StyledButton>
  );
}

const ReviewButton = styled(ReviewButtonBase)`
  ${(p) => !p.active && "opacity: 20%;"}

  ${(p) =>
    p.active &&
    css`
      transform: rotate(360deg);
    `}

  transform-origin: 25px 25px;
  transition: transform 0.5s ease-out;
`;

const StyledButton = styled(ButtonBase)``;

const StyledImage = styled(Image)`
  width: 50px;
  height: fit-content;
`;

export default ReviewButton;
