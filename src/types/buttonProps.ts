import { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

// TO-DO: Refatorar?
export const button = tv({
  base: 'flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-1.5',
  variants: {
    variant: {
      primary:
        'text-white-950 bg-blue-600 active:bg-blue-700/80 hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-700',
      secondary:
        'dark:text-gray-100 text-gray-200 border dark:border-gray-400 border-gray-100 dark:hover:bg-gray-700/90 hover:bg-white-700/90 dark:active:bg-gray-700/40 active:bg-white-600/90 dark:focus-visible:ring-gray-300 focus-visible:ring-gray-300/90 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-700',
    },
    size: {
      lg: 'h-[46px] p-4 rounded-md font-medium text-base',
      md: 'min-w-[72px] h-8.5 px-2 rounded-md font-medium text-2xs',
      sm: 'min-w-[70px] h-8 px-2 rounded-md font-medium text-2xs',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

type ButtonComponentProps = ComponentProps<'button'>
type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonComponentProps, ButtonVariants {
  label?: string | ReactNode
}
