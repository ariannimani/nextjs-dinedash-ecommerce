import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PromoBlockProps } from './PromoBlock';
import { PromoBlock } from './PromoBlock';

export default {
  title: 'Molecules/PromoBlock',
  component: PromoBlock,
} as Meta;

const PromoBlockComponent: Story<PromoBlockProps> = (args) => <PromoBlock {...args} />;

export const Default = PromoBlockComponent.bind({});
Default.args = {
  children: 'Story of PromoBlock',
};
