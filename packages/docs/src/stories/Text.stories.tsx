import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@faller-bruno-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs', 'surfaces'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cumque iusto aspernatur accusantium veniam, illo voluptatibus harum natus perspiciatis, suscipit, dolor quis vel consequuntur. Iusto saepe quam dolores modi aperiam!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
