import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipContentContainer,
  TooltipPortal,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  title: string
  description?: string
}

export function Tooltip({ title, description }: TooltipProps, { ...props }) {
  return (
    <TooltipContainer {...props}>
      <TooltipContentContainer>
        <TooltipPortal>
          <TooltipContent>
            <Text>{title}</Text>
            {description && <Text>{description}</Text>}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContentContainer>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
