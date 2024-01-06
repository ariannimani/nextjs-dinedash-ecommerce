import { InputWithLabel, TextAreaWithLabel } from "../../molecules";
import { Button, Typography } from "../../atoms";
import styled, { css } from "styled-components";

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

export const DetailsTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 24px;
    ${theme.fonts.primary.bold}
    white-space:nowrap;
  `,
);

export const DetailsInputWithLabel = styled(InputWithLabel)`
  width: 100%;
`;

export const DetailsTextAreaWithLabel = styled(TextAreaWithLabel)`
  width: 100%;
`;

export const FlexWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;

    ${theme.breakpoints.fromTablet(css`
      flex-direction: row;
    `)};
  `,
);

export const FlexWrapperSmall = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const FlexWrapperDetailsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 49px;

    ${theme.breakpoints.fromTablet(css`
      flex-direction: row;
    `)};
  `,
);

export const FlexWrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const SaveButton = styled(Button)(
  ({ theme }) => css`
    ${theme.breakpoints.fromTablet(css`
      width: 125px;
    `)};
  `,
);
