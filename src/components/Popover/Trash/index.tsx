import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'

import * as Popover from '@radix-ui/react-popover'
import PageItem from '../../Buttons/PageItem'

import IconSearch from '@/assets/icons/IconSearch'

const Trash = () => {
  const { taskLists, handleEditTaskList, handleDeleteTaskList } = useTaskLists()
  const { notes, handleEditNote, handleDeleteNote } = useNotes()

  return (
    <Popover.Portal>
      <Popover.Content className="relative bottom-8 left-[127px]">
        <div className="absolute min-w-[392px] pt-1.5 pb-8.5 rounded-md dark:bg-gray-800 bg-white-900 drop-shadow-md">
          <div className="flex flex-col gap-6 rounded-lg">
            <div className="px-3.5">
              <div className="absolute top-3.5 left-3 flex justify-center items-center w-6 pt-px">
                <IconSearch width="14" height="14" color="dark:stroke-gray-300 stroke-white-300" />
              </div>

              <input
                className="
                  w-full h-8 pl-7 font-int rounded-md text-sm dark:text-gray-50 text-gray-500
                  dark:placeholder:text-gray-200 placeholder:text-white-300 dark:bg-gray-800 bg-white-900 focus:outline-none
                "
                type="text"
                placeholder="Pesquisar itens na lixeira"
                // onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-6 px-1.5">
              {taskLists.filter((list) => list.deleted === true).length !== 0 && (
                <div className="flex flex-col gap-2">
                  <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">Listas</span>

                  <div className="flex flex-col gap-1">
                    {taskLists
                      .filter((list) => list.deleted === true)
                      .map((list) => (
                        <PageItem
                          variant="trash"
                          key={list.id}
                          color={list.color}
                          title={list.title}
                          onPrimaryAction={() => handleEditTaskList(list.id, list.title, list.color, false)}
                          onSecondaryAction={() => handleDeleteTaskList(list.id)}
                          showActions
                        />
                      ))}
                  </div>
                </div>
              )}

              {notes.filter((note) => note.deleted === true).length !== 0 && (
                <div className="flex flex-col gap-2">
                  <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">Notas</span>

                  <div className="flex flex-col gap-1">
                    {notes
                      .filter((note) => note.deleted === true)
                      .map((note) => (
                        <PageItem
                          variant="trash"
                          key={note.id}
                          color={note.color}
                          title={note.title}
                          onPrimaryAction={() => handleEditNote(note.id, note.title, note.color, false)}
                          onSecondaryAction={() => handleDeleteNote(note.id)}
                          showActions
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  )
}

export default Trash
