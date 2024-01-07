import styled, { css } from "styled-components";
import { Button, Typography } from "../../atoms";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    border-radius: 12px;
    border: 1px solid ${theme.palette.colors.gray[96]};
    background-color: ${theme.palette.colors.white};
  `,
);

export const OrderTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 24px;
    ${theme.fonts.primary.bold}
    white-space:nowrap;
  `,
);

export const FlexButtons = styled.div`
  display: flex;
`;

type CategoryButtonProps = {
  active?: boolean;
};

export const CategoryButton = styled(Button)<CategoryButtonProps>(
  ({ active, theme }) => css`
    width: 138px;
    border: 1px solid ${theme.palette.colors.gray[96]};
    background-color: ${active
      ? theme.palette.colors.gray[98]
      : theme.palette.colors.white};

    color: ${active
      ? theme.palette.text.primary
      : theme.palette.text.secondary};

    &:first-child {
      border-radius: 6px 0px 0px 6px;
    }

    &:last-child {
      border-radius: 0px 6px 6px 0px;
    }

    &:hover {
      background-color: ${theme.palette.colors.gray[98]};
      color: ${theme.palette.text.primary};
    }
  `,
);

export const MoreOrdersButton = styled(Button)(
  ({ theme }) => css`
    color: ${theme.palette.text.primary};
  `,
);

export const NoOrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
