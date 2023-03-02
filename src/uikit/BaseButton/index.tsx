import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import styled, { css } from 'styled-components';

type ButtonSize = 'sm' | 'md' | 'lg' | 'custom';
type AsComponent = 'button' | 'a' | 'div';

export interface BaseButtonProps {
  size?: ButtonSize;
  fullWidth?: boolean;
  asComponent?: AsComponent;
  className?: string;
  [rest: string]: any;
}

function Button({
  children,
  asComponent = 'button',
  className,
  ...rest
}: PropsWithChildren<BaseButtonProps>): ReactElement {
  const Component = asComponent;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

const ButtonBase = styled(Button).attrs((p) => ({
  size: p.size || 'md',
}))`
  font-family: 'Gt eesti display', sans-serif;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  ${(p) => {
    switch (p.size) {
      case 'md':
        return css`
          padding: 18px 26px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2;
        `;
    }
  }}
  ${(p) => p.fullWidth && 'width: 100%'}
`;

export default ButtonBase;
