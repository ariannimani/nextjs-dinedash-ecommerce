import { IconButton, Tag, Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 280px;
    height: 272px;
    border-radius: 12px;
    background: ${theme.palette.colors.white};
    border: 1px solid ${theme.palette.colors.gray[93]};

    img {
      object-fit: cover;
      border-radius: 12px 12px 0px 0px;
      z-index: 1;
    }

    ${theme.breakpoints.fromTablet(css`
      width: 360px;
      height: 335px;
    `)}
  `,
);

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 16px;
  padding: 0 16px;
`;

export const FavoriteButton = styled(IconButton)(
  ({ theme }) => css`
    background: rgba(46, 46, 51, 0.45);

    path {
      stroke: ${theme.palette.colors.white};
    }

    &:hover {
      background: rgba(46, 46, 51, 0.6);
      path {
        stroke: ${theme.palette.colors.pink.dark};
        fill: ${theme.palette.colors.pink.dark};
      }
    }
  `,
);

export const CardTitle = styled(Typography)(
  ({ theme }) => css`
    ${theme.breakpoints.fromTablet(css`
      font-size: 20px;
    `)}
  `,
);

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const TagIcon = styled(Tag)(
  ({ theme }) => css`
    font-size: 14px;
    ${theme.fonts.primary.medium}
  `,
);
