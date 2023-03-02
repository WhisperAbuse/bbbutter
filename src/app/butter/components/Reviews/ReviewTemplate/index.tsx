import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { ReviewItem } from '@/global/types';
import ButtonBase from '@/uikit/BaseButton';
import Heading from '@/uikit/Heading';
import Paper from '@/uikit/Paper';
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
      <div>
        <MaskedPhoto
          PersonImg={personImg}
          backgroundColor={backgroundColor}
          key={id}
        />
      </div>
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
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
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
