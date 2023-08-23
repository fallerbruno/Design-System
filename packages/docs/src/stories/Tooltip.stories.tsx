import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@faller-bruno-ui/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    triggerElement: <PlusCircle size={32} weight="bold" color="white" />,
    content: 'Tooltip Uhul!',
  },
  argTypes: {
    triggerElement: {
      description: 'Element that will trigger the tooltip',
      control: {
        type: null,
      },
    },
    content: {
      description: 'Text that will be displayed inside the tooltip',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
