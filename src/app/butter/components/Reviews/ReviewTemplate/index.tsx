import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import { ReviewItem } from '@/global/types';
import ButtonBase from '@/uikit/BaseButton';
import Heading from '@/uikit/Heading';
import Typography from '@/uikit/Typography';

import MaskedPhoto from './MaskedPhoto';

interface IProps {
  className?: string;
  reviewData: ReviewItem;

  onClick: () => void;
}

function ReviewTemplateBase({
  className,
  reviewData,

  onClick,
}: IProps): ReactElement {
  const { id, personImg, companyLogo, text, author, role, backgroundColor } =
    reviewData;

  return (
    <Container onClick={onClick}>
      <PhotoWrapper>
        <MaskedPhoto
          key={id}
          PersonImg={personImg}
          backgroundColor={backgroundColor}
        />
      </PhotoWrapper>
      <ReviewContent className={'flash-content'} key={id}>
        <LogoWrapper>
          <StyledLogo src={companyLogo} alt="" />
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

const Container = styled(ButtonBase)`
  border-radius: 80px;
  background-color: ${(p) => p.theme.main};
  padding: 50px 32px 80px;
  width: 100%;

  @media ${screen.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 80px;
    padding: 100px 60px;
  }
`;

const PhotoWrapper = styled.div`
  min-width: 200px;
  flex-shrink: 0;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media ${screen.laptop} {
    gap: 30px;
    max-width: 600px;
  }
`;

const StyledLogo = styled(Image)`
  width: fit-content;
  height: 100%;
`;

const LogoWrapper = styled.div`
  height: 40px;
  width: fit-content;
  margin-top: 20px;
`;

const StyledParagraph = styled(Typography)`
  font-size: 18px;
  font-weight: 300;

  @media ${screen.laptop} {
    font-size: 22px;
  }
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
