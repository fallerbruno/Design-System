import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@faller-bruno-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Toast dispatch',
    description: 'The message has been dispatch...',
    open: true,
    type: 'primary',
  },
  argTypes: {
    type: {
      options: ['primary', 'success', 'error'],
      control: { type: 'inline-radio' },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Success: StoryObj<ToastProps> = {
  args: {
    type: 'success',
  },
}

export const Error: StoryObj<ToastProps> = {
  args: {
    type: 'error',
  },
}
