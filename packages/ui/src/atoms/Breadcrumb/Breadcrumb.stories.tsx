import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { BreadcrumbProps } from './Breadcrumb';
import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const BreadcrumbComponent: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = BreadcrumbComponent.bind({});
Default.args = {
  children: 'Story of Breadcrumb',
};
