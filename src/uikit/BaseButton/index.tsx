import { PropsWithChildren, ReactElement, ReactNode } from "react";

import styled, { css } from "styled-components";

type ButtonSize = "sm" | "md" | "lg";
type AsComponent = "button" | "a" | "div";

export interface BaseButtonProps {
  size?: ButtonSize;
  fullWidth?: boolean;
  asComponent?: AsComponent;
  className?: string;
}

function Button({
  children,
  asComponent = "button",
  className,
}: PropsWithChildren<BaseButtonProps>): ReactElement {
  const Component = asComponent;

  return <Component className={className}>{children}</Component>;
}

const ButtonBase = styled(Button)`
  font-family: "Gt eesti display", sans-serif;
  ${(p) => {
    switch (p.size) {
      default:
        return css`
          padding: 18px 26px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2;
        `;
    }
  }}
  ${(p) => p.fullWidth && "width: 100%"}
`;

export default ButtonBase;
