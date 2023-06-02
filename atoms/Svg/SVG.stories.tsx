import type { Meta, StoryObj } from '@storybook/react';
import Component from './index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Component> = {
  title: 'Atoms/ SVG',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['logo','menu-user','menu-marak','menu-heart','menu-blog','menu-investment','search','hamburger'],
      control: { type: 'radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    icon: 'logo',
    className: 'text-primary',
  }
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
