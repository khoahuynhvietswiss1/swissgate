import type { Meta, StoryObj } from '@storybook/react';
import Component from './index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Component> = {
  title: 'Atoms/ IconButton',
  component: Component,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    icon: 'search',
    classContainer: 'w-[52px] h-[52px]',
    classIcon: 'w-[22px] h-[22px]',
    variant: 'primary',
  }
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
