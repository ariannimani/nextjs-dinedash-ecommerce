import styled, { css } from "styled-components";

export const IconButton = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 20px;
    height: 20px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background-color: ${theme.palette.colors.gray[93]};
    position: relative;

    &:hover {
      opacity: 0.5;
    }
  `,
);
