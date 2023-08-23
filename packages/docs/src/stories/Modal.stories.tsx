import type { StoryObj, Meta } from '@storybook/react'
import { Button, Modal, ModalProps, Text } from '@faller-bruno-ui/react'

export default {
  title: 'Data display/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Modal Open',
    children: (
      <>
        <Text>Modal as Open</Text>
      </>
    ),
    triggerElement: <Button>Open</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    triggerElement: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ModalProps>

export const Primary: StoryObj<ModalProps> = {}
