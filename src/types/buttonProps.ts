import { ComponentProps, ReactNode } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant: string;
  label?: string | ReactNode;
  size?: string;
}
