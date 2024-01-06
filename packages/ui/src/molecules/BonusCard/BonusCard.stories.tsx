import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { BonusCardProps } from './BonusCard';
import { BonusCard } from './BonusCard';

export default {
  title: 'Molecules/BonusCard',
  component: BonusCard,
} as Meta;

const BonusCardComponent: Story<BonusCardProps> = (args) => <BonusCard {...args} />;

export const Default = BonusCardComponent.bind({});
Default.args = {
  children: 'Story of BonusCard',
};
