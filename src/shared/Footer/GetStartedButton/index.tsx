import { ReactElement } from 'react';

import styled from 'styled-components';

import ButtonBase from '@/uikit/BaseButton';
import Typography from '@/uikit/Typography';

interface IProps {
  className?: string;
}

function GetStartedButtonBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <ButtonText>Get started for free</ButtonText>
    </Container>
  );
}

const GetStartedButton = styled(GetStartedButtonBase)``;

const Container = styled(ButtonBase)`
  background-color: white;
  border-radius: 56px;
  padding: 40px 10px;
  width: 100%;
`;

const ButtonText = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
`;

export default GetStartedButton;
