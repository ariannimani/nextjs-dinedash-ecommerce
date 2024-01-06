import React from "react";
import * as S from "./Details.styled";
import { ToggleSwitchWithLabel } from "../../molecules";

export interface DetailsProps {
  testId?: string;
  className?: string;
}

export function Details({ testId, className }: DetailsProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <S.DetailsTitle testId="details-title">Details</S.DetailsTitle>
      <S.DetailsInputWithLabel label="Name" placeholder="Name" />
      <S.FlexWrapper>
        <S.DetailsInputWithLabel label="Phone" placeholder="Phone" />
        <S.DetailsInputWithLabel label="Email" placeholder="Email" />
      </S.FlexWrapper>
      <S.FlexWrapper>
        <S.DetailsInputWithLabel
          label="Delivery Address"
          placeholder="Delivery Address"
        />
        <S.FlexWrapperSmall>
          <S.DetailsInputWithLabel label="Intercom" placeholder="Intercom" />
          <S.DetailsInputWithLabel label="Floor" placeholder="Floor" />
          <S.DetailsInputWithLabel label="Apartment" placeholder="Apartment" />
        </S.FlexWrapperSmall>
      </S.FlexWrapper>
      <S.DetailsTextAreaWithLabel
        label="Additional info (.opt)"
        placeholder="Apartment"
      />
      <S.FlexWrapperDetailsContainer>
        <S.FlexWrapperDetails>
          <S.DetailsTitle testId="promo-infomration">
            Promo Information
          </S.DetailsTitle>
          <ToggleSwitchWithLabel label="Via Email" />
          <ToggleSwitchWithLabel label="Via SMS" />
        </S.FlexWrapperDetails>

        <S.FlexWrapperDetails>
          <S.DetailsTitle testId="order-details">Order Details </S.DetailsTitle>
          <ToggleSwitchWithLabel label="Via Email" />
        </S.FlexWrapperDetails>
      </S.FlexWrapperDetailsContainer>
      <S.SaveButton variant="primary" onClick={() => {}}>
        Save
      </S.SaveButton>
    </S.Container>
  );
}
