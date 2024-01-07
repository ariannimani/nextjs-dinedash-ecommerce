import styled, { css } from "styled-components";

export const Circle = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 56px;
    background-color: ${theme.palette.colors.black};
    color: ${theme.palette.colors.white};

    svg {
      width: 20px;
      height: 20px;
    }

    ${theme.breakpoints.fromTablet(css`
      width: 56px;
      height: 56px;

      svg {
        width: 24px;
        height: 24px;
      }
    `)};
  `,
);
