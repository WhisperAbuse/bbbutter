import { ReactElement } from 'react';

import styled from 'styled-components';

import Button from '@/uikit/Button';
import Typography from '@/uikit/Typography';

interface IProps {
  className?: string;
}

function CommunityParagraphBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <Typography className={className}>
        <strong> Built for facilitators, by facilitators. </strong>
        We’ve built Butter with love from our community from day one. Level up
        your workshopping, facilitation, and collaboration skills by learning
        from our network of experts.
      </Typography>
      <ButtonWrapper>
        <Button variant="primary-bg-empty">Join the community</Button>
      </ButtonWrapper>
    </Container>
  );
}

const CommunityParagraph = styled(CommunityParagraphBase)`
  font-size: 32px;
  line-height: 1;
  font-weight: 300;
`;

const Container = styled.div``;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 40px auto 0;
`;

export default CommunityParagraph;
