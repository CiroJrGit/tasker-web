import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import * as Dialog from '@radix-ui/react-dialog';

interface ModalWrapProps {
  title: string;
  children: ReactNode;
}

const shadow = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.18 } },
};

const ModalWrap = ({ title, children }: ModalWrapProps) => {
  return (
    <Dialog.Portal>
      <motion.div variants={shadow} initial="from" animate="to">
        <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0 backdrop-blur-[1px]" />

        <Dialog.Content className="absolute w-full max-w-[532px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-5 rounded-lg dark:bg-gray-900 bg-white-700 focus:outline-none">
          <Dialog.Title className="text-xl font-semibold dark:text-gray-50 text-gray-400">
            {title}
          </Dialog.Title>

          {children}
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  );
};

export default ModalWrap;
