import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { keyframes } from '@stitches/react'

const VIEWPORT_PADDING = '$6'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  alignItems: 'baseline',
  gap: '$1',

  padding: '$3 $5',
  width: '100%',
  maxWidth: 360,
  minWidth: 180,
  borderRadius: '$md',
  overflow: 'hidden',

  position: 'relative',
  right: 16,
  top: 16,

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    type: {
      primary: {
        background: '$gray800',
        border: '1px solid $gray600',

        'span, svg': {
          color: '$gray200',
        },
      },
      success: {
        background: '$green500',
        border: '1px solid $ignite700',

        'span, svg': {
          color: '$gray100',
        },
      },
      error: {
        background: '$red500',
        border: '1px solid $red700',

        'span, svg': {
          color: '$gray100',
        },
      },
    },
  },

  defaultVariants: {
    type: 'normal',
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '$1',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$md',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray200',
  fontSize: 13,
  lineHeight: 1.3,
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontWeight: 500,
})
