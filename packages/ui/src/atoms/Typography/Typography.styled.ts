import styled, { css } from "styled-components";

export const Typography = styled.p(
  ({ theme }) => css`
    color: ${theme.palette.text.primary};
    ${theme.fonts.primary.bold};
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.16px;
    margin: 0;
    padding: 0;
  `,
);
