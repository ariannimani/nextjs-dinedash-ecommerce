import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 132px;
    height: 140px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 12px;
    border: 1px solid ${theme.palette.colors.gray[93]};
    background-color: ${theme.palette.colors.white};

    ${theme.breakpoints.fromTablet(css`
      gap: 20px;
      width: 360px;
      height: 110px;
      padding: 0px 24px;
      border: 1.5px solid ${theme.palette.colors.gray[96]};
      flex-direction: row;
    `)}
  `,
);

export const PromoBody = styled.div(
  ({ theme }) => css`
    text-align: center;

    ${theme.breakpoints.fromTablet(css`
      text-align: left;
    `)}
  `,
);

export const PromoTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 12px;

    ${theme.breakpoints.fromTablet(css`
      font-size: 20px;
    `)}
  `,
);

export const PromoDetails = styled(PromoTitle)(
  ({ theme }) => css`
    margin-top: 2px;
    line-height: 18px;
    font-size: 12px;
    ${theme.fonts.primary.regular}

    ${theme.breakpoints.fromTablet(css`
      font-size: 16px;
    `)}
  `,
);
