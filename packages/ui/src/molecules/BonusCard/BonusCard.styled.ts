import { Button, Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const BonusCard = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 12px;
    background-color: ${theme.palette.colors.white};
    border: 1px solid ${theme.palette.colors.gray[96]};
    max-width: 265px;
  `,
);

export const BonusTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 20px;
    ${theme.fonts.primary.bold}
  `,
);

export const BonusContent = styled(Typography)(
  ({ theme }) => css`
    font-size: 12px;
    ${theme.fonts.primary.medium}
    line-height: 18px;
    color: ${theme.palette.text.secondary};
  `,
);
