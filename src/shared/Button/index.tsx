import { PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'primary-dark' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface IProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: PropsWithChildren<IProps>): ReactNode {
  const Component = PrimaryButton as any;

  return (
    <Component fullWidth={fullWidth} variant={variant} size={size}>
      {children}
    </Component>
  );
}

const StyledButton = styled.button`
  font-family: 'Gt eesti display', sans-serif;
  ${(p) => {
    switch (p.size) {
      default:
        return css`
          padding: 18px 26px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
        `;
    }
  }}
  ${(p) => p.fullWidth && 'width: 100%'}
`;

const PrimaryButton = styled(StyledButton)`
  border: 2px solid ${(p) => p.theme.dark};
  background-color: ${(p) =>
    p.variant === 'primary-dark' ? p.theme.dark : p.theme.light};
  color: ${(p) =>
    p.variant === 'primary-dark' ? p.theme.light : p.theme.dark};
`;
