import { ReactNode } from 'react'
import { motion } from 'framer-motion'

import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'

interface ModalWrapProps {
  title?: string
  children: ReactNode
}

const shadow = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.18 } },
}

const ModalWrap = ({ title, children }: ModalWrapProps) => {
  return (
    <Dialog.Portal>
      <motion.div variants={shadow} initial="from" animate="to">
        <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0 backdrop-blur-[1px]" />

        <Dialog.Content className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col pt-4 pb-5 rounded-lg dark:bg-gray-900 bg-white-900 focus:outline-none">
          {title && (
            <div className="flex flex-col gap-3">
              <Dialog.Title className=" px-4 font-medium dark:text-gray-50 text-gray-500">
                {title}
              </Dialog.Title>

              <div className="px-1">
                <Separator.Root
                  className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                  decorative
                />
              </div>
            </div>
          )}

          {children}
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  )
}

export default ModalWrap
