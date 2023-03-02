import { ReactElement } from 'react';

import styled from 'styled-components';

import Heading from '@/uikit/Heading';
import Typography from '@/uikit/Typography';

import BottomFooter from './BottomFooter';
import GetStartedButton from './GetStartedButton';

interface IProps {
  className?: string;
}

function FooterBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <FooterGetStarted>
        <GetStartedHeading>
          <strong>Ready to run buttery-smooth virtual sessions?</strong> It’s
          time to experience Butter for yourself!
        </GetStartedHeading>
        <GetStartedButton />
      </FooterGetStarted>
      <BottomFooterWrapper>
        <BottomFooter />
      </BottomFooterWrapper>
    </Container>
  );
}

const Footer = styled(FooterBase)`
  background-color: ${(p) => p.theme.dark};
`;

const Container = styled.div``;

const FooterGetStarted = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const GetStartedHeading = styled(Typography)`
  font-size: 32px;
  color: white;
  font-weight: 300;
`;

const BottomFooterWrapper = styled.div`
  margin-top: 20px;
`;

export default Footer;
