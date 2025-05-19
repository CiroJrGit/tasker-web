/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'
import { NavLink } from 'react-router-dom'

import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'
import BaseModal from '../BaseModal'
import PageItem from '@/components/Buttons/PageItem'

import IconSearch from '@/assets/icons/IconSearch'

const SearchModal = () => {
  const { taskLists, loadTaskLists, handleEditTaskList } = useTaskLists()
  const { notes, loadNotes, handleEditNote } = useNotes()

  const [search, setSearch] = useState('')
  const lowerSearch = search.toLowerCase()

  const tasklistsFiltereds = taskLists.filter((tasklist) =>
    tasklist.title.toLowerCase().includes(lowerSearch.trim()),
  )

  const notesFiltereds = notes.filter((note) =>
    note.title.toLowerCase().includes(lowerSearch.trim()),
  )
  
  // TO-DO: Refatorar actionsButtons PageItem
  const handleOnActionDelete = (
    e: any,
    id: string,
    title: string,
    color: string,
    deleted: boolean,
    type: 'tasklist' | 'note',
  ) => {
    e.stopPropagation()
    e.preventDefault()

    if (type === 'tasklist') {
      handleEditTaskList(id, title, color, deleted)
    } else if (type === 'note') {
      handleEditNote(id, title, color, deleted)
    }
  }

  useEffect(() => {
    loadTaskLists()
    loadNotes()
  }, [])

  return (
    <BaseModal>
      <div className="min-w-[568px] h-[652px]">
        <div className="flex flex-col gap-7">
          <Dialog.Title className="relative flex flex-col gap-3">
            <div className="px-4">
              <div className="absolute top-0.5 left-3 flex justify-center items-center w-6 pt-px">
                <IconSearch
                  width="16"
                  height="16"
                  color="dark:stroke-gray-300 stroke-white-300"
                />
              </div>
              <input
                className="
                  w-full h-6 pr-5 pl-7 rounded-md dark:text-gray-50 text-gray-500
                  dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-900 bg-white-900 focus:outline-none 
                "
                type="text"
                placeholder="Pesquisar páginas..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="px-1">
              <Separator.Root
                className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                decorative
              />
            </div>
          </Dialog.Title>

          <div className="flex flex-col gap-7 px-1.5">
            {taskLists.length !== 0 && (
              <div className="flex flex-col gap-3">
                <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">
                  Listas
                </span>

                <div className="flex flex-col gap-1 px-px">
                  {tasklistsFiltereds
                    .filter((list) => list.deleted === false).length === 0 && (
                      <span className="text-sm dark:text-gray-300 text-white-400 px-2">
                        Nenhuma lista encontrada.
                      </span>
                  )}

                  {tasklistsFiltereds
                    .filter((list) => list.deleted === false)
                    .map((list) => (
                      <NavLink
                        key={list.id}
                        to={`/tasklists/${list.id}`}
                        className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                      >
                        <Dialog.Close asChild>
                          <PageItem
                            variant='search'
                            color={list.color}
                            title={list.title}
                            onPrimaryAction={() => console.log('Editar ' + list.title)}
                            onSecondaryAction={(e) => handleOnActionDelete(e, list.id, list.title, list.color, true, 'tasklist')}
                            showActions
                          />
                        </Dialog.Close>
                      </NavLink>
                    ))}
                </div>
              </div>
            )}

            {notes.length !== 0 && (
              <div className="flex flex-col gap-3">
                <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">
                  Notas
                </span>

                <div className="flex flex-col gap-1 px-px">
                  {notesFiltereds.filter((note) => note.deleted === false)
                    .length === 0 && (
                    <span className="text-sm dark:text-gray-300 text-white-400 px-2">
                      Nenhuma nota encontrada.
                    </span>
                  )}

                  {notesFiltereds
                    .filter((note) => note.deleted === false)
                    .map((note, index) => (
                      <NavLink
                        key={index}
                        to={`/notes/${note.id}`}
                        className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                      >
                        <Dialog.Close asChild>
                          <PageItem
                            variant='search'
                            color={note.color}
                            title={note.title}
                            onPrimaryAction={() => console.log('Editar ' + note.title)}
                            onSecondaryAction={(e) => handleOnActionDelete(e, note.id, note.title, note.color, true, 'note')}
                            showActions
                          />
                        </Dialog.Close>
                      </NavLink>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export default SearchModal
