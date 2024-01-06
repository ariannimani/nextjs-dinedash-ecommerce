import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { DetailsProps } from './Details';
import { Details } from './Details';

export default {
  title: 'Organisms/Details',
  component: Details,
} as Meta;

const DetailsComponent: Story<DetailsProps> = (args) => <Details {...args} />;

export const Default = DetailsComponent.bind({});
Default.args = {
  children: 'Story of Details',
};
