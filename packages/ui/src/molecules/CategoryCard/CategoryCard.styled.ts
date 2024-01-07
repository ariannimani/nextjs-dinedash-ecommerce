import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 132px;
    height: 131px;
    border-radius: 12px;
    background: linear-gradient(
      0deg,
      rgba(12, 12, 35, 0.1) 38.05%,
      rgba(12, 12, 35, 0) 100%
    );

    img {
      object-fit: cover;
      border-radius: 12px;
      z-index: 1;
    }

    ${theme.breakpoints.fromTablet(css`
      width: 262px;
      height: 210px;
    `)}
  `,
);

export const CategoryTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.colors.white};
    z-index: 2;
    font-size: 14px;
    position: absolute;
    bottom: 16px;
    left: 16px;

    ${theme.breakpoints.fromTablet(css`
      font-size: 24px;
      bottom: 24px;
      left: 24px;
    `)}
  `,
);
