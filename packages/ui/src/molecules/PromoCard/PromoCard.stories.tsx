import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { PromoCardProps } from "./PromoCard";
import { PromoCard } from "./PromoCard";

export default {
  title: "Molecules/PromoCard",
  component: PromoCard,
} as Meta;

const PromoCardComponent: Story<PromoCardProps> = (args) => (
  <PromoCard {...args} />
);

export const Default = PromoCardComponent.bind({});
Default.args = {
  image:
    "https://s3-alpha-sig.figma.com/img/fa7c/ee49/8e27f55692b383434c151b7d3d151224?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tz43wYSDLHOZZ9GnR2FvatCfDs70uMW2OsJrxUbO2BLhFAhVbFQr1uPFHxf96TbHxcDQVlhziYFBqb19Eo4i1FHDdd81do7qw4fNx8Q22IBpLJX0FbEyRmKAimw69K-c~dpWSZRGUP1wlOuc9xT15yCMhyE-WZ6GthM3dPeSixObaFQpZ7PClNJpsS48AaxwZJLAQrjlN1JDHuGTL~0SJKV9DcvfRKyW7gYplhsJodz20tr3msLPYb3yiqL4KSj6n4twDA0XY8oSlO5rNN~sN1NKWkYq--wvjVr4Hl6F6L1oq8TtOwvZjGUkqUOowFNjNFUspPANCZKMfXWSNcD7OQ__",
  alt: "ice-cream",
  title: "Special offers on",
  details: "Ice Cream!",
  buttonTitle: "Discover",
};
