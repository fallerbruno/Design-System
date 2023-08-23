import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipContentContainer,
  TooltipPortal,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  triggerElement: JSX.Element
  content: string
}

export function Tooltip(
  { triggerElement, content }: TooltipProps,
  { ...props },
) {
  return (
    <TooltipContainer>
      <TooltipContentContainer {...props}>
        <TooltipTrigger asChild>{triggerElement}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <Text>{content}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContentContainer>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
