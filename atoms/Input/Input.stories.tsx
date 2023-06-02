import type { Meta, StoryObj } from '@storybook/react';
import Component from './index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Component> = {
  title: 'Atoms/ Input',
  component: Component,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    placeholder: 'name@domain.ch',
    className: 'w-[321px]',
  }
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
