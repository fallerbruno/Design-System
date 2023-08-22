import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@faller-bruno-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs', 'surfaces'],
  args: {
    src: 'https://github.com/fallerbruno.png',
    alt: 'Bruno Faller',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
