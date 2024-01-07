import { Button, Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 280px;
    height: 165px;

    border-radius: 12px;

    ${theme.breakpoints.fromTablet(css`
      width: 360px;
      height: 225px;
    `)}
    background-color: ${theme.palette.colors.pink.light};

    overflow: hidden;
  `,
);

export const ImageCard = styled.img`
  position: absolute;
  bottom: 6px;
  right: -100px;
  width: 70%;
`;

export const Body = styled.div(
  ({ theme }) => css`
    position: absolute;
    bottom: 27px;
    left: 24px;

    ${theme.breakpoints.fromTablet(css`
      bottom: 41px;
      left: 32px;
    `)}
  `,
);

export const DiscoverButton = styled(Button)(
  ({ theme }) => css`
    width: 100px;
    height: 32px;
    padding: 8px 16px 10px 16px;
    font-size: 14px;

    ${theme.breakpoints.fromTablet(css`
      width: 105px;
      height: 40px;
      padding: 10px;
      font-size: 16px;
    `)}
  `,
);

export const OfferTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 16px;
    ${theme.fonts.primary.regular}

    ${theme.breakpoints.fromTablet(css`
      font-size: 24px;
    `)}
  `,
);

export const OfferDetails = styled(Typography)(
  ({ theme }) => css`
    font-size: 24px;

    ${theme.breakpoints.fromTablet(css`
      font-size: 32px;
    `)}
  `,
);

export const TextContainer = styled.div`
  margin-bottom: 24px;
`;
