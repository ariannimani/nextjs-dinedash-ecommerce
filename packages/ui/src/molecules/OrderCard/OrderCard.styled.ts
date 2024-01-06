import { PinSmallIcon } from "../../icons";
import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 12px;
    gap: 20px;
    border: 1px solid ${theme.palette.colors.gray[96]};
    background-color: ${theme.palette.colors.white};
    width: 100%;

    ${theme.breakpoints.fromMobileLarge(css`
      flex-direction: row;
      align-items: center;
    `)};
  `,
);

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 12px;
    color: ${theme.palette.colors.gray[48]};
    ${theme.fonts.primary.medium}
    line-height: 18px;
  `,
);

export const LabelDark = styled(Label)(
  ({ theme }) => css`
    color: ${theme.palette.text.primary};
  `,
);

export const FlexWrapperSmall = styled.div`
  display: flex;
  gap: 8px;
`;

export const PinIcon = styled(PinSmallIcon)(
  ({ theme }) => css`
    height: 15px;
    stroke: ${theme.palette.colors.gray[48]};
  `,
);
