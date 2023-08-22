import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@faller-bruno-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 1,
  },
}

export const Step2of4: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 2,
  },
}

export const Step3of4: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 3,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
