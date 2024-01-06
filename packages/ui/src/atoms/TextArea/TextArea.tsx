import React, { TextareaHTMLAttributes } from "react";
import * as S from "./TextArea.styled";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  testId?: string;
  placeholder?: string;
  className?: string;
  icon?: boolean;
}

export function TextArea({
  testId,
  placeholder,
  className,
  icon,
  ...props
}: TextAreaProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <S.TextAreaInput placeholder={placeholder} {...props} />
    </S.Container>
  );
}
