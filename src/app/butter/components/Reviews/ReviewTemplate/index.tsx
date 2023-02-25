import { ReactElement } from "react";

import Image from "next/image";
import styled from "styled-components";

import Heading from "@/uikit/Heading";
import Paper from "@/uikit/Paper";
import Typography from "@/uikit/Typography";
import LeapLogoSVG from "public/media/reviews/leap_logo.webp";
import LeapRobImg from "public/media/reviews/leap_rob_hamblen.png";

import MaskedPhoto from "./MaskedPhoto";

const text =
  "“When my clients have a workshop with us in Butter, there's just a different vibe to the whole interaction. It becomes something they look forward to! It marries up exactly with the playful way we want to show up as an agency. Our participants love the structure and how it gives them an equal chance to contribute.”";
const author = "Rob Hamblen";
const role = "Founder at LEAP, Product Design & Innovation agency";

interface IProps {
  className?: string;
}

function ReviewTemplateBase({ className }: IProps): ReactElement {
  return (
    <Container>
      <div>
        <MaskedPhoto PersonImg={LeapRobImg} />
      </div>
      <ReviewContent>
        <LogoWrapper>
          <StyledLogo src={LeapLogoSVG} alt="" />
        </LogoWrapper>
        <StyledParagraph>{text}</StyledParagraph>
        <AuthorBlock>
          <AuthorName>{author}</AuthorName>
          <RoleText>{role}</RoleText>
        </AuthorBlock>
      </ReviewContent>
    </Container>
  );
}

const ReviewTemplate = styled(ReviewTemplateBase)``;

const Container = styled(Paper)`
  border-radius: 80px;
  background-color: ${(p) => p.theme.main};
  padding: 50px 32px 80px;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLogo = styled(Image)`
  width: 100%;
  height: fit-content;
`;

const LogoWrapper = styled.div`
  width: 40px;
  margin-top: 20px;
`;

const StyledParagraph = styled(Typography)`
  font-size: 18px;
  font-weight: 300;
`;

const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AuthorName = styled(Heading)`
  font-size: 26px;
`;

const RoleText = styled(Typography)`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

export default ReviewTemplate;
