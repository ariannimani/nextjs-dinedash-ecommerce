import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { OrdersProps } from './Orders';
import { Orders } from './Orders';

export default {
  title: 'Organisms/Orders',
  component: Orders,
} as Meta;

const OrdersComponent: Story<OrdersProps> = (args) => <Orders {...args} />;

export const Default = OrdersComponent.bind({});
Default.args = {
  children: 'Story of Orders',
};
