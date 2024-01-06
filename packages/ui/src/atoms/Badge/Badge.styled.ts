import styled, { css } from "styled-components";

export const Badge = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 4px;
    height: 4px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: ${theme.palette.colors.pink.medium};
    font-size: 12px;
    ${theme.fonts.primary.black}
  `,
);
