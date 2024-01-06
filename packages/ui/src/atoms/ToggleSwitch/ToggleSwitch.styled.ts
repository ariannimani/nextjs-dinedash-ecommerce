import styled, { css } from "styled-components";

export const ToggleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.div(
  ({ theme }) => css`
    width: 43px;
    height: 22px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    padding: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    background-color: ${theme.palette.colors.black};
  `,
);

type ToggleBallProps = {
  active: boolean;
};
export const ToggleBall = styled.div<ToggleBallProps>(
  ({ theme, active }) => css`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${theme.palette.colors.white};
    transition: transform 0.3s ease;
    transform: translateX(${active ? "20px" : "0"});
  `,
);
