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
  children: JSX.Element
  content: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipContentContainer>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <Text>{props.content}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContentContainer>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
