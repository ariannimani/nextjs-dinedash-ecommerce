import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./CartItem";

const meta: Meta<typeof CartItem> = {
  title: "Molecules/CartItem",
  component: CartItem,
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Primary: Story = {
  args: {
    item: {
      image:
        "https://s3-alpha-sig.figma.com/img/7d53/1461/2bfb4cf34ac257d7b24aaee730603ab3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUC~cjToy0NmrLxmkEj8-y6K45HR5yJsbiux5ViLQ~G4ZC0yUdfnlRUezci6gTkcmGyBqn8w-VHGP8XqPRRB5KTZMqBr31u7DQ7jsQlUuNCxfbuyAXuGntepY4Xt5maHZzf3n8vtsL9rAkYI1G39JNXhn10DzFRfDSL7G1qoE5GR4QLmeJNs-D7SgV9R4CbYlZHyH1404QsSNUbrG8YhaGVMMbcV0k00KinPJKP~m6adk5a-UH1u2eDIBhdaFCYVS-GvJGaLmFKLGShu3RwB4O23rnCuRvYcTcKGWpH~FT5gB9pIrwCKtcS9aWuVCneysdxZcfNp~nSX3JS6rUZkOg__",
      title: "King Bucket Shrimps",
      quantity: 1,
      price: 10,
    },
  },
};
