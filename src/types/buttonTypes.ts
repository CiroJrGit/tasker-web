/* eslint-disable prettier/prettier */
import { ButtonHTMLAttributes, ComponentProps, MouseEventHandler, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

// MainButton component
export const mainButton = tv({
  base: 'flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-1.5',
  variants: {
    variant: {
      primary: `
        text-white-950 bg-blue-600 active:bg-blue-700/80 hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-2
        dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-700
      `,
      secondary: `
        dark:text-gray-100 text-gray-200 border dark:border-gray-400 border-gray-100 dark:hover:bg-gray-700/90 hover:bg-white-700/90
        dark:active:bg-gray-700/40 active:bg-white-600/90 dark:focus-visible:ring-gray-300 focus-visible:ring-gray-300/90 focus-visible:ring-offset-2 
        dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-700
      `,
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

type MainButtonComponentProps = ComponentProps<'button'>
type MainButtonVariants = VariantProps<typeof mainButton>

export interface MainButtonProps extends MainButtonComponentProps, MainButtonVariants {
  label?: string | ReactNode
}

// MenuItem component
export const menuItem = tv({
  base: 'flex items-center gap-2 px-2 rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group',
  variants: {
    as: {
      'dialog-trigger': 'dialog-trigger',
      'popover-trigger': 'popover-trigger',
      'button-trigger': 'button-trigger',
    },
    variant: {
      menu: `dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75`,
      popover: `dark:hover:bg-gray-600/90 hover:bg-white-700/75 dark:active:bg-gray-500/25 active:bg-white-600/70`,
    },
    size: {
      lg: 'h-10',
      md: 'h-8',
    }
  },
  defaultVariants: {
    as: 'button-trigger',
    variant: 'menu',
    size: 'md'
  },
})

type MenuItemComponentProps = ComponentProps<'button'>
type MenuItemVariants = VariantProps<typeof menuItem>

export interface MenuItemProps extends MenuItemComponentProps, MenuItemVariants, ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  danger?: boolean
  children?: ReactNode
}

// PageItem component
export const pageItem = tv({
  base: 'flex justify-between items-center h-8 px-3 font-int rounded-md',
  variants: {
    variant: {
      active: `
        dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
        dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75
      `,
      trash: `dark:hover:bg-gray-600/95 hover:bg-white-700/75 cursor-pointer`,
    },
  },
  defaultVariants: {
    variant: 'active',
    action: 'edit',
  },
})

type PageItemComponentProps = ComponentProps<'div'>
type PageItemVariants = VariantProps<typeof pageItem>

export interface PageItemProps extends PageItemComponentProps, PageItemVariants {
  title: string
  color: string
  onPrimaryAction?: MouseEventHandler
  onSecondaryAction?: MouseEventHandler
  showActions?: boolean
}

export const pageItemButton = tv({
  base: 'flex justify-center items-center w-6 h-6 rounded-2sm focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400',
  variants: {
    action: {
      active: 'dark:hover:bg-gray-500/70 hover:bg-white-500/90 dark:active:bg-gray-500/40 active:bg-white-400/60',
      trash: 'dark:hover:bg-gray-400/60 hover:bg-white-500/90 dark:active:bg-gray-400/35 active:bg-white-400/50',
    },
  },
  defaultVariants: {
    action: 'active',
  },
})

type PageItemButtonComponentProps = ComponentProps<'button'>
type PageItemButtonVariants = VariantProps<typeof pageItemButton>

export interface PageItemButtonProps extends PageItemButtonComponentProps, PageItemButtonVariants {
  children?: ReactNode
}