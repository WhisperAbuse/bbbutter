import { FC, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import * as S from './styled';

interface IProps {
  variant?: 'primary' | 'secondary';
  fontSize?: number;
}

export default function Heading({
  variant = 'primary',
  fontSize = 48,
  children,
}: PropsWithChildren<IProps>): ReactNode {
  return <S.Heading fontSize={fontSize}>{children}</S.Heading>;
}
