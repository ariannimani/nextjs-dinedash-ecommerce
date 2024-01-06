import { ArrowLeftSmallIcon, CloseIcon } from "../../icons";
import { Input, Typography } from "../../atoms";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: -10px 4px 65px 0px rgba(0, 0, 0, 0.15);
    background: transparent;
    border-radius: 12px;
    width: 100%;

    ${theme.breakpoints.fromMobileLarge(css`
      width: 340px;
    `)}
  `,
);

export const LoginHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    padding: 24px 24px 24px 32px;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.palette.colors.gray[98]};
    border-radius: 12px 12px 0px 0px;
    margin: 0;
  `,
);

export const LoginTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LoginTypography = styled(Typography)(
  ({ theme }) => css`
    font-size: 32px;
    ${theme.fonts.primary.black};
  `,
);

export const CloseLogin = styled(CloseIcon)(
  ({ theme }) => css`
    cursor: pointer;

    & path {
      fill: ${theme.palette.text.secondary};
    }
    &:hover {
      & path {
        fill: ${theme.palette.text.primary};
      }
    }
  `,
);

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

export const InputLabel = styled(Typography)(
  ({ theme }) => css`
    font-size: 12px;
    ${theme.fonts.primary.bold}
  `,
);

export const InputPhoneNumber = styled(Input)`
  width: 100%;
`;

export const LoginLabel = styled(Typography)(
  ({ theme }) => css`
    display: inline;
    font-size: 12px;
    color: ${theme.palette.text.secondary};
    ${theme.fonts.primary.medium}
    line-height: 18px;
  `,
);

export const LabelPink = styled(LoginLabel)(
  ({ theme }) => css`
    color: ${theme.palette.colors.pink.medium};
    ${theme.fonts.primary.bold}
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  `,
);

export const LoginFooter = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const InputCode = styled(Input)`
  width: 100px;
  height: 48px;
`;

export const LoginLabelCode = styled(LoginLabel)`
  display: block;
`;

export const CodeContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputLabelPhone = styled(InputLabel)(
  ({ theme }) => css`
    ${theme.fonts.primary.regular}
  `,
);

export const LeftArrowIcon = styled(ArrowLeftSmallIcon)`
  cursor: pointer;
`;
