import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@faller-bruno-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'error',
        'warning',
        'success',
        'secondaryError',
        'secondaryWarning',
        'secondarySuccess',
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'success',
  },
}

export const Error: StoryObj<ButtonProps> = {
  args: {
    variant: 'error',
    children: 'Cancel',
  },
}
export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
    children: 'warning',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const SecondaryError: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondaryError',
    children: 'Cancel',
  },
}
export const SecondaryWarning: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondaryWarning',
    children: 'warning',
  },
}

export const SecondarySuccess: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondarySuccess',
    children: 'success',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
