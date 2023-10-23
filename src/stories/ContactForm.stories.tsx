import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ContactForm as ContactFormComponent } from '@/components';

const meta: Meta<typeof ContactFormComponent> = {
  title: 'Calendar/Calendar',
  component: ContactFormComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = Omit<StoryObj<typeof meta>, 'args'>;

export const ContactForm: Story = {
  render: () => (
    <ContactFormComponent
      onSubmitContact={(e) => {
        e?.preventDefault();
        console.log(e?.currentTarget);
      }}
    />
  ),
};