import styled, { css } from "styled-components";

export const Price = styled.div(
  ({ theme }) => css`
    display: flex;
    height: 40px;
    width: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background-color: ${theme.palette.colors.pink.light};
    cursor: pointer;
    ${theme.fonts.primary.medium}
  `,
);
