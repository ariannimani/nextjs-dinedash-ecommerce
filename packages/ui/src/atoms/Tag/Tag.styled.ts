import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const getTagVariant = (theme: DefaultTheme) => ({
  primary: css`
    background-color: ${theme.palette.colors.black};
    color: ${theme.palette.colors.white};

    svg {
      color: ${theme.palette.colors.white};
    }
  `,
  secondary: css`
    background-color: ${theme.palette.colors.pink.light};
    color: ${theme.palette.text.primary};

    svg {
      color: ${theme.palette.colors.pink.medium};
    }
  `,
});

export type TagContainerProps = {
  variant: string;
};

export const Container = styled.div<TagContainerProps>(
  ({ variant, theme }) => css`
    display: flex;
    width: fit-content;
    height: 32px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    white-space: nowrap;

    ${theme.fonts.primary.medium};
    font-size: 16px;

    ${getTagVariant(theme)[variant]}
  `,
);
