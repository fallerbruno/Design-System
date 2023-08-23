import { ComponentProps } from 'react'
import {
  ToastAction,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  triggerElement: JSX.Element
  title: string
  description: string
  open: boolean
}

export function Toast({ title, description, open, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastContainer open={open} {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastAction>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
