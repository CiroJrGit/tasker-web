import { ButtonProps, button } from '../types/buttonProps'

// import * as Dialog from '@radix-ui/react-dialog';

const Button = ({ label, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ variant, size })}>
      {label}
    </button>
  )
}

export default Button
