import { ComponentProps } from 'react'
import {
  DialogClose,
  DialogContentContainer,
  DialogOverlay,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './styles'
import {
  DialogContent,
  DialogDescription,
  DialogPortal,
} from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

export interface ModalProps extends ComponentProps<typeof DialogRoot> {
  triggerElement: JSX.Element
  title: string
  children: JSX.Element
  open: boolean
  closeElement?: JSX.Element
}

export function Modal({
  title,
  children,
  triggerElement,
  ...props
}: ModalProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContentContainer>
            <DialogContent {...props}>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{children}</DialogDescription>
            </DialogContent>
            <DialogClose>
              <X size={20} />
            </DialogClose>
          </DialogContentContainer>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  )
}

Modal.displayName = 'Modal'
