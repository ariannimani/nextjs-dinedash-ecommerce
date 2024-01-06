import { ArrowLeftSmallIcon } from "../../icons";
import styled, { css } from "styled-components";

export const Breadcrumb = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${theme.palette.text.secondary};
    ${theme.fonts.primary.medium}
  `,
);

export const LeftArrowIcon = styled(ArrowLeftSmallIcon)`
  cursor: pointer;
`;
