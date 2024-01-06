import { Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 12px;
    ${theme.fonts.primary.bold}
  `,
);
