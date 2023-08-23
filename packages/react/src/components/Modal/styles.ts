import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'
import { keyframes } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const DialogRoot = styled(Dialog.Root, {})
export const DialogTrigger = styled(Dialog.Trigger, {})
export const DialogPortal = styled(Dialog.Portal, {})

export const DialogContentContainer = styled(Dialog.Content, {
  background: '$gray800',
  borderRadius: 6,
  position: 'fixed',
  top: '50%',
  left: '50%',
  bottom: 'auto',
  right: 'auto',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
})

export const DialogContent = styled('div', {})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 'bold',
  color: '$gray200',
  fontSize: '$md',
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$gray200',
  fontSize: 15,
  lineHeight: 1.5,
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray500',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogClose = styled(Dialog.Close, {
  all: 'unset',
  backgroundColor: 'transparent',
  color: '$white',
  weight: '$bold',
  marginBottom: 'auto',
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$red500',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$red700' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$red700` },
})
