import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const TextAreaWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 14px;
    ${theme.fonts.primary.bold}
  `,
);
