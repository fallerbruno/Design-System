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

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastContainer {...props}>
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
