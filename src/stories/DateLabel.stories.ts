import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateLabel } from './DateLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateLabel> = {
  title: 'Example/DateLabel',
  component: DateLabel,
  parameters: {
    date: new Date('2025-06-01T00:00:00Z'),
  },
};

export default meta;
type Story = StoryObj<typeof DateLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {},
};

export const Y2K: Story = {
  args: {
    date: new Date('2000-01-01T00:00:00Z'),
  },
};

export const April14: Story = {
  args: {
    date: new Date('1931-04-14T12:00:00Z'),
  },
};
