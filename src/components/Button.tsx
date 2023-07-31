import { ButtonProps } from '../types/buttonProps';

// import * as Dialog from '@radix-ui/react-dialog';
// import Modal from './Modal';
import { HiOutlinePlus } from 'react-icons/hi';

function Button({ variant, label, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="primary max-h-[64px] px-5 py-4.5 rounded-lg font-bold text-lg focus-visible:ring-2"
    >
      {label}
    </button>
  );
}

export default Button;
