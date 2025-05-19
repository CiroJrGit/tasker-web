import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNotes } from '@/hooks/useNotes'
import { Note } from '@/types/pagesTypes'
import clsx from 'clsx'

import * as Popover from '@radix-ui/react-popover'
import Edit from '@/components/Popover/Edit'

import IconEllipsis from '@/assets/icons/IconEllipsis'

const NotePage = () => {
  const { notes, handleGetNote } = useNotes()

  const { id } = useParams()
  const [note, setNote] = useState<Note | any>()

  useEffect(() => {
    getNote()
  }, [id, notes])

  async function getNote() {
    if (id) {
      const noteResponse = await handleGetNote(id)
      setNote(noteResponse)
    }
  }

  return (
    <div className="h-full space-y-14">
      <div className="space-y-10">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-2.5">
            <span
              className={clsx('block w-1.5 h-[26px] rounded-sm', {
                'bg-main-blue': note?.color === '#265EED',
                'bg-main-purple': note?.color === '#8029EE',
                'bg-main-pink': note?.color === '#EE29B7',
                'bg-main-red': note?.color === '#F4385A',
                'bg-main-yellow': note?.color === '#EE9329',
                'bg-main-green': note?.color === '#29EE9B',
              })}
              aria-hidden="true"
            ></span>

            <h1 className="font-semibold text-3.5xl dark:text-gray-50 text-gray-500">{note?.title}</h1>
          </div>

          <div className="absolute top-0 right-11 p-4">
            <Popover.Root>
              <Popover.Trigger
                className="
                  flex justify-center items-center w-[30px] h-[30px] rounded-md text-3xl dark:text-gray-300 text-white-400
                  dark:hover:bg-gray-800/80 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
                "
              >
                <IconEllipsis width="20" height="20" />
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content className="relative top-2.5 right-[146px] focus:outline-none">
                  <div className="absolute w-[200px] drop-shadow-md">
                    <Edit page={note} type="note" />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-32"></div>
    </div>
  )
}

export default NotePage
