import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from "./Button";
import { hexToRgb } from "../../helpers/hexToRgb";

const getButtonVariant = (theme: DefaultTheme) => ({
  primary: css`
    background-color: ${theme.palette.colors.black};
    color: ${theme.palette.text.main};

    &:hover {
      background-color: rgba(${hexToRgb(theme.palette.colors.black)}, 0.7);
    }

    @media (min-width: 768px) {
      .icon {
        display: none;
      }
    }
  `,
  secondary: css`
    background-color: ${theme.palette.colors.white};
    color: ${theme.palette.colors.black};
    border: 1px solid ${theme.palette.borders.dark};

    &:hover {
      color: ${theme.palette.colors.gray[48]};
      border: 1px solid ${theme.palette.colors.gray[93]};
    }
  `,
});

export const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    padding: 0.625rem;
    width: 100%;
    height: 2rem;
    white-space: nowrap;
    color: ${theme.palette.colors.black};

    ${getButtonVariant(theme)[variant]};
  `,
);
