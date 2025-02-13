import { useContext } from 'react'
import { PagesContext } from '../contexts/pagesContext'
import clsx from 'clsx'

import IconBack from '../assets/icons/IconBack'
import IconTrash from '../assets/icons/IconTrash'
import IconSearch from '../assets/icons/IconSearch'

const Trash = () => {
  const {
    taskLists,
    handleDeleteTaskList,
    handleEditTaskList,
    notes,
    handleDeleteNote,
    handleEditNote,
  } = useContext(PagesContext)

  return (
    <>
      <div className="flex flex-col gap-6 font-int rounded-lg">
        <div className="px-3.5">
          <div className="absolute top-3.5 left-3 flex justify-center items-center w-6 pt-px">
            <IconSearch
              width="14"
              height="14"
              color="dark:stroke-gray-300 stroke-white-300"
            />
          </div>

          <input
            className="
              w-full h-8 pl-7 rounded-md text-sm dark:text-gray-50 text-gray-500
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
              <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">
                Listas
              </span>

              <div className="flex flex-col gap-1">
                {taskLists
                  .filter((list) => list.deleted === true)
                  .map((list) => (
                    <div
                      key={list.id}
                      className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 cursor-pointer"
                    >
                      <div className="flex justify-between items-center h-8 px-3 rounded-md dark:hover:bg-gray-600/95 hover:bg-white-700/75">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={clsx('block w-2 h-2 rounded-sm', {
                              'bg-main-blue': list.color === '#265EED',
                              'bg-main-purple': list.color === '#8029EE',
                              'bg-main-pink': list.color === '#EE29B7',
                              'bg-main-red': list.color === '#F4385A',
                              'bg-main-yellow': list.color === '#EE9329',
                              'bg-main-green': list.color === '#29EE9B',
                            })}
                            aria-hidden="true"
                          ></span>

                          <span className="max-w-[170px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                            {list.title}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="rounded-md p-1 dark:hover:bg-gray-400/70 hover:bg-white-500/90 dark:active:bg-gray-400/40 active:bg-white-400/50"
                            onClick={() =>
                              handleEditTaskList(
                                list.id,
                                list.title,
                                list.color,
                                false,
                              )
                            }
                          >
                            <div className="flex justify-center items-center w-4">
                              <IconBack width="15.5" height="13.5" />
                            </div>
                          </button>
                          <button
                            className="px-0.5 py-1 rounded-md dark:hover:bg-gray-400/70 hover:bg-white-500/90 dark:active:bg-gray-400/40 active:bg-white-400/50"
                            onClick={() => handleDeleteTaskList(list.id)}
                          >
                            <div className="flex justify-center items-center w-5">
                              <IconTrash width="17" height="17" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {notes.filter((note) => note.deleted === true).length !== 0 && (
            <div className="flex flex-col gap-2">
              <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">
                Notas
              </span>

              <div className="flex flex-col gap-1">
                {notes
                  .filter((note) => note.deleted === true)
                  .map((note) => (
                    <div
                      key={note.id}
                      className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 cursor-pointer"
                    >
                      <div className="flex justify-between items-center h-8 px-3 rounded-md dark:hover:bg-gray-600/95 hover:bg-white-700/75">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={clsx('block w-2 h-2 rounded-sm', {
                              'bg-main-blue': note.color === '#265EED',
                              'bg-main-purple': note.color === '#8029EE',
                              'bg-main-pink': note.color === '#EE29B7',
                              'bg-main-red': note.color === '#F4385A',
                              'bg-main-yellow': note.color === '#EE9329',
                              'bg-main-green': note.color === '#29EE9B',
                            })}
                            aria-hidden="true"
                          ></span>

                          <span className="max-w-[170px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                            {note.title}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="p-1 rounded-md dark:hover:bg-gray-400/70 hover:bg-white-500/90 dark:active:bg-gray-400/40 active:bg-white-400/50"
                            onClick={() =>
                              handleEditNote(
                                note.id,
                                note.title,
                                note.color,
                                false,
                              )
                            }
                          >
                            <div className="flex justify-center items-center w-4">
                              <IconBack width="15.5" height="13.5" />
                            </div>
                          </button>
                          <button
                            className="px-0.5 py-1 rounded-md dark:hover:bg-gray-400/70 hover:bg-white-500/90 dark:active:bg-gray-400/40 active:bg-white-400/50"
                            onClick={() => handleDeleteNote(note.id)}
                          >
                            <div className="flex justify-center items-center w-5">
                              <IconTrash width="17" height="17" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Trash
