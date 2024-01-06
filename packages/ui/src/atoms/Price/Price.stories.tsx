import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PriceProps } from './Price';
import { Price } from './Price';

export default {
  title: 'Atoms/Price',
  component: Price,
} as Meta;

const PriceComponent: Story<PriceProps> = (args) => <Price {...args} />;

export const Default = PriceComponent.bind({});
Default.args = {
  children: 'Story of Price',
};
