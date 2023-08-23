import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@faller-bruno-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Abrir
      </Button>
      <Toast onOpenChange={setOpen} {...props} open={isOpen} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: DemoToast,
  tags: ['autodocs'],
  args: {
    title: 'Toast dispatch',
    description: 'The message has been dispatch...',
    isOpen: true,
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
