import { PropsWithChildren, ReactElement } from "react";

import styled from "styled-components";

import ButtonBase, { BaseButtonProps } from "../BaseButton";

type ButtonVariant = "primary" | "primary-dark" | "primary-bg-empty";

type IProps = BaseButtonProps & {
  variant?: ButtonVariant;
};

export default function Button(props: PropsWithChildren<IProps>): ReactElement {
  const { variant = "primary", children } = props;
  let Component = PrimaryButton;

  if (variant === "primary-dark") {
    Component = PrimaryButtonDark;
  } else if (variant === "primary-bg-empty") {
    Component = PrimaryBgEmpty;
  }

  return <Component {...props}>{children}</Component>;
}

const PrimaryButtonBase = styled(ButtonBase)`
  border: 2px solid ${(p) => p.theme.dark};
`;

const PrimaryButton = styled(PrimaryButtonBase)`
  background-color: ${(p) => p.theme.light};
  color: ${(p) => p.theme.dark};
`;

const PrimaryButtonDark = styled(PrimaryButtonBase)`
  background-color: ${(p) => p.theme.dark};
  color: ${(p) => p.theme.light};
`;

const PrimaryBgEmpty = styled(PrimaryButtonBase)`
  background-color: transparent;
  color: ${(p) => p.theme.dark};
`;
