import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const ToggleSwitchWithLabel = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 14px;
    ${theme.fonts.primary.medium}
  `,
);
