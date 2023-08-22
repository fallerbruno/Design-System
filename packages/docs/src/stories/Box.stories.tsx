import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@faller-bruno-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs', 'surfaces'],
  args: {
    children: (
      <>
        <Text>Something...</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
