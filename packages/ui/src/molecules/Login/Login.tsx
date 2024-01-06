"use client";

import React, { useState } from "react";
import * as S from "./Login.styled";
import { Button, Input } from "../../atoms";
import { ArrowLeftSmallIcon, FacebookIcon, GoogleIcon } from "../../icons";

export interface LoginProps {
  testId?: string;
  className?: string;
}

export function Login({ testId, className }: LoginProps): JSX.Element {
  const [confirmLogin, setConfirmLogin] = useState(true);

  const changeConfirmLoginHandler = () => setConfirmLogin((prev) => !prev);

  return (
    <S.Container data-testid={testId} className={className}>
      <S.LoginHeader>
        <S.LoginTitle>
          {confirmLogin && (
            <S.LeftArrowIcon onClick={changeConfirmLoginHandler} />
          )}
          <S.LoginTypography testId="login-title">Log in</S.LoginTypography>
        </S.LoginTitle>
        <S.CloseLogin />
      </S.LoginHeader>
      {!confirmLogin ? (
        <S.LoginBody>
          <S.InputLabel testId="input-label">Phone</S.InputLabel>
          <S.InputPhoneNumber type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          <S.LoginLabel testId="accept-terms-and-condition">
            You accept{" "}
            <S.LabelPink testId="terms-and-condition">
              Terms and conditions
            </S.LabelPink>{" "}
            by entering your number
          </S.LoginLabel>

          <S.LoginFooter>
            <Button
              variant="secondary"
              onClick={() => {}}
              icon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              variant="secondary"
              onClick={() => {}}
              icon={<FacebookIcon />}
            >
              Facebook
            </Button>
          </S.LoginFooter>
        </S.LoginBody>
      ) : (
        <S.LoginBody>
          <S.InputLabel testId="input-label">SMS-code</S.InputLabel>
          <S.CodeContainer>
            <S.InputCode pattern="[0-9][0-9][0-9]" />
            <S.LoginLabelCode testId="code-confirm">
              The code was sent on{" "}
              <S.InputLabelPhone testId="phone-number">
                +7 (910) 876-55-43
              </S.InputLabelPhone>
              <S.LabelPink testId="resend-button">Resend</S.LabelPink>
            </S.LoginLabelCode>
          </S.CodeContainer>
        </S.LoginBody>
      )}
    </S.Container>
  );
}
