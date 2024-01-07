import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { MainCardProps } from "./MainCard";
import { MainCard } from "./MainCard";

export default {
  title: "Molecules/MainCard",
  component: MainCard,
} as Meta;

const MainCardComponent: Story<MainCardProps> = (args) => (
  <MainCard {...args} />
);

export const Default = MainCardComponent.bind({});
Default.args = {
  raiting: "5.0",
  image:
    "https://s3-alpha-sig.figma.com/img/73c3/e695/d999a4e6e59563ed87e475c4cde6fc5c?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPrkFDd~-9Ov10TYzpF6zigZJSFDuGbKSkJuzaXtOQmmMpwOL9r9MfI2qMiX12xrqR1orxKzqNUU3~aDIkNPL-I5gpA5piHo3rVqS5M-HtmuZOiVjiQ280Dc776YPE8xS3Uj7jhhQlmv5I3aQt6FCrBnTnOylDYJSJUhMg~XNvHHxTPffPn0Gbi-i9bhcCL5fAP3~gBTVG2xwdSIk3vOXwjgYHkmPoVfuJO7JgsGYfD-5CAMVBFv~HHGuL0SMOO9xktb25KZqOBiGda0TChaCyEr7kQEUI6JNi8tcnZFQHh~dAbCyXrfP24GgyqiS-0Yw-hAQUVUy4O1Io0ozpUjmQ__",
  alt: "sandwitch",
  title: "City Sandwiches And Coffee",
  price: "from 2$",
  preparationTime: "20-30min",
};
