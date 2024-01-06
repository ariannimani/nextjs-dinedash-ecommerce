import { hexToRgb } from "../../helpers";
import styled, { DefaultTheme, css } from "styled-components";
import { IconButtonProps } from "./IconButton";

const getIconButtonVariant = (theme: DefaultTheme) => ({
  primary: css`
    background-color: ${theme.palette.colors.gray[93]};
    color: ${theme.palette.text.main};

    &:hover {
      background-color: rgba(${hexToRgb(theme.palette.colors.gray[93])}, 0.7);
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
});

export const IconButton = styled.div<IconButtonProps>(
  ({ variant, theme }) => css`
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    position: relative;

    ${getIconButtonVariant(theme)[variant]};
  `,
);
