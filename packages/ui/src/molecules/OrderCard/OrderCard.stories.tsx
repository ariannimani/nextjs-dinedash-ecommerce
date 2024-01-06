import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { OrderCardProps } from './OrderCard';
import { OrderCard } from './OrderCard';

export default {
  title: 'Molecules/OrderCard',
  component: OrderCard,
} as Meta;

const OrderCardComponent: Story<OrderCardProps> = (args) => <OrderCard {...args} />;

export const Default = OrderCardComponent.bind({});
Default.args = {
  children: 'Story of OrderCard',
};
