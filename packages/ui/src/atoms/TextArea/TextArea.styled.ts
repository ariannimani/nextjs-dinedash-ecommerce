import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 8px 12px 8px 12px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 6px;
    gap: 8px;
    border: 1.5px solid ${theme.palette.colors.gray[93]};
    color: ${theme.palette.colors.gray[68]};

    &:focus-within {
      border: 1.5px solid ${theme.palette.colors.black};
    }
  `,
);

export const TextAreaInput = styled.textarea(
  ({ theme }) => css`
    height: 150px;
    ${theme.fonts.secondary.regular}
    border: none;
    width: 100%;
    color: ${theme.palette.colors.gray[68]};
    outline: none;
    resize: none;

    &::placeholder {
      color: ${theme.palette.colors.gray[68]};
    }
  `,
);
