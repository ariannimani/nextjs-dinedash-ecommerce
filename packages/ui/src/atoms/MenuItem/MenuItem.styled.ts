import styled, { css } from "styled-components";

type MenuItemProps = {
  active?: boolean;
};

export const MenuItem = styled.div<MenuItemProps>(
  ({ active, theme }) => css`
    display: flex;
    width: 263px;
    height: 56px;
    padding: 10px 20px;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    border: 1px solid ${theme.palette.colors.gray[93]};
    background-color: ${active
      ? theme.palette.colors.gray[93]
      : theme.palette.colors.white};
    color: ${active
      ? theme.palette.text.primary
      : theme.palette.colors.gray[56]};
    margin-top: -1px;

    ${theme.fonts.primary.medium}

    &:first-child {
      border-radius: 12px 12px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 12px 12px;
    }

    .starIcon {
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover {
      background-color: ${theme.palette.colors.gray[93]};
      color: ${theme.palette.text.primary};

      .starIcon {
        opacity: 1;
      }
    }
  `,
);
