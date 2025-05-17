/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'
import BaseModal from '../BaseModal'

import IconSearch from '@/assets/icons/IconSearch'
import IconTrash from '@/assets/icons/IconTrash'
import IconEdit from '@/assets/icons/IconEdit'

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

  useEffect(() => {
    loadTaskLists()
    loadNotes()
  }, [])

  function handlePropagationLink(e: any) {
    e.stopPropagation()
    e.preventDefault()
  }

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
                  {tasklistsFiltereds.filter((list) => list.deleted === false)
                    .length === 0 && (
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
                        className="relative rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                      >
                        <Dialog.Close asChild>
                          <div
                            className="
                              flex items-center gap-2.5 h-8 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
                              dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75
                            "
                          >
                            <span
                              className={clsx(
                                'block w-2 h-2 rounded-sm', // group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
                                {
                                  'bg-main-blue': list.color === '#265EED',
                                  'bg-main-purple': list.color === '#8029EE',
                                  'bg-main-pink': list.color === '#EE29B7',
                                  'bg-main-red': list.color === '#F4385A',
                                  'bg-main-yellow': list.color === '#EE9329',
                                  'bg-main-green': list.color === '#29EE9B',
                                },
                              )}
                              aria-hidden="true"
                            ></span>

                            <span className="max-w-[172px] font-int text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                              {list.title}
                            </span>
                          </div>
                        </Dialog.Close>

                        <div className="absolute top-[3px] right-2 flex gap-3 peer">
                          <button
                            className="
                              p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                              dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                            "
                            onClick={() => console.log('Editar ' + list.title)}
                          >
                            <IconEdit width="18" height="18" />
                          </button>
                          <button
                            className="
                              p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                              dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                            "
                            onClick={(e) => {
                              console.log('Excluir ' + list.title)
                              handlePropagationLink(e)
                              handleEditTaskList(list.id, list.title, list.color, true)
                            }}
                          >
                            <IconTrash width="17" height="17" color="dark:stroke-gray-100 stroke-gray-300" />
                          </button>
                        </div>
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
                        className="relative rounded-m focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                      >
                        <Dialog.Close asChild>
                          <div
                            className="
                              flex items-center gap-2.5 h-8 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
                              dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75
                            "
                          >
                            <span
                              className={clsx(
                                'block w-2 h-2 rounded-sm', // group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
                                {
                                  'bg-main-blue': note.color === '#265EED',
                                  'bg-main-purple': note.color === '#8029EE',
                                  'bg-main-pink': note.color === '#EE29B7',
                                  'bg-main-red': note.color === '#F4385A',
                                  'bg-main-yellow': note.color === '#EE9329',
                                  'bg-main-green': note.color === '#29EE9B',
                                },
                              )}
                              aria-hidden="true"
                            ></span>

                            <span className="max-w-[172px] font-int text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                              {note.title}
                            </span>
                          </div>
                        </Dialog.Close>

                        <div className="absolute top-[3px] right-2 flex gap-3 peer">
                          <button
                            className="
                              p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                              dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                            "
                            onClick={() => console.log('Editar ' + note.title)}
                          >
                            <IconEdit width="18" height="18" />
                          </button>
                          <button
                            className="
                              p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                              dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                            "
                            onClick={(e) => {
                              console.log('Excluir ' + note.title)
                              handlePropagationLink(e)
                              handleEditNote(note.id, note.title, note.color, true)
                            }}
                          >
                            <IconTrash width="17" height="17" color="dark:stroke-gray-100 stroke-gray-300" />
                          </button>
                        </div>
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
