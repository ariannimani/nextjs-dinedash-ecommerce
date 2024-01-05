import { Badge, IconButton, Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    margin: 0;
    display: inline-flex;
    padding: 16px 20px;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    ${theme.breakpoints.fromDesktopSmall(css`
      display: flex;
      height: 75px;
      padding: 15px 150px;
      align-items: center;
      flex-shrink: 0;
      justify-content: space-between;
      gap: 20px;
    `)};
  `,
);

export const WrapperDesktopOnly = styled.div(
  ({ theme }) => css`
    display: none;

    ${theme.breakpoints.fromDesktopSmall(css`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    `)}
  `,
);

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuWrapper = styled(FlexWrapper)`
  gap: 32px;
`;

export const MenuItem = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.text.secondary};
  `,
);

export const MenuButtonMobileOnly = styled.div(
  ({ theme }) => css`
    display: flex;
    margin-right: 8px;

    ${theme.breakpoints.fromDesktopSmall(css`
      display: none;
    `)};
  `,
);
