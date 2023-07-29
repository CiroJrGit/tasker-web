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

        <Dialog.Content className="absolute space-y-9 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg dark:bg-gray-900 bg-white-700">
          <Dialog.Title className="flex items-center gap-1 text-xl font-semibold dark:text-gray-100 text-gray-500">
            {title}
          </Dialog.Title>

          {children}

          {/* <div className="flex justify-end gap-2">
            <Dialog.Close asChild>
              <button></button>
            </Dialog.Close>

            <Dialog.Close className="secondary" onClick={() => setTitle('')}>
              Voltar
            </Dialog.Close>
          </div> */}
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  );
};

export default ModalWrap;
