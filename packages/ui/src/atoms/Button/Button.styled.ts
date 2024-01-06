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
    border: 1px solid ${theme.palette.colors.gray[93]};
    color: ${theme.palette.colors.gray[48]};

    &:hover {
      color: ${theme.palette.colors.black};
      border: 1px solid ${theme.palette.borders.dark};
    }
  `,

  tertiary: css`
    background-color: ${theme.palette.colors.pink.medium};
    color: ${theme.palette.colors.white};

    &:hover {
      background-color: rgba(
        ${hexToRgb(theme.palette.colors.pink.medium)},
        0.7
      );
    }
  `,
});

export const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    display: inline-flex;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border: none;
    border-radius: 6px;
    color: ${theme.palette.colors.black};

    ${getButtonVariant(theme)[variant]};
  `,
);
