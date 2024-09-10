/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PagesContext } from '../contexts/pagesContext';
import clsx from 'clsx';

import * as Dialog from '@radix-ui/react-dialog';

import IconSearch from '../assets/icons/IconSearch';
import IconTrash from '../assets/icons/IconTrash';
import IconEditPen from '../assets/icons/IconEditPen';
import IconEdit from '../assets/icons/IconEdit';

const ModalSearch = () => {
  const {
    taskLists,
    loadTaskLists,
    notes,
    loadNotes,
    handleEditTaskList,
    handleEditNote,
  } = useContext(PagesContext);

  const [search, setSearch] = useState('');
  const lowerSearch = search.toLowerCase();

  const tasklistsFiltereds = taskLists.filter((tasklist) =>
    tasklist.title.toLowerCase().includes(lowerSearch.trim()),
  );

  const notesFiltereds = notes.filter((note) =>
    note.title.toLowerCase().includes(lowerSearch.trim()),
  );

  useEffect(() => {
    loadTaskLists();
    loadNotes();
  }, []);

  function handlePropagationLink(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <div className="min-w-[484px] h-[552px] mt-8">
      <>
        <div className="relative mb-9">
          <input
            className="
              w-full h-11 pr-5 pl-11 rounded-md dark:text-gray-50 text-gray-400 dark:placeholder:text-gray-200 placeholder:text-white-300 dark:bg-gray-700 bg-white-700
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="text"
            placeholder="Pesquisar..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute top-3.5 left-3 flex justify-center items-center w-6">
            <IconSearch
              width="16"
              height="16"
              color="dark:stroke-gray-300 stroke-white-300"
            />
          </div>
        </div>

        <div className="space-y-7">
          {taskLists.length !== 0 && (
            <div className="flex flex-col gap-2">
              <span className="px-px font-semibold text-2sm dark:text-gray-300 text-white-400">
                Listas
              </span>

              <div className="flex flex-col gap-1.5 px-px">
                {tasklistsFiltereds.filter((list) => list.deleted === false)
                  .length === 0 && (
                    <span className="dark:text-gray-300 text-white-400">
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
                      <div className="absolute top-[4px] right-2 flex gap-2 peer">
                        <button
                          className="
                            p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                            dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                          "
                          onClick={() => console.log('Editar ' + list.title)}
                        >
                          <IconEdit width="19" height="19" />
                        </button>
                        <button
                          className="
                            p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                            dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                          "
                          onClick={(e) => {
                            console.log('Excluir ' + list.title);
                            handlePropagationLink(e);
                            handleEditTaskList(list.id, list.title, list.color, true);
                          }}
                        >
                          <IconTrash width="18" height="18" />
                        </button>
                      </div>

                      <Dialog.Close asChild>
                        <div
                          className="
                            flex items-center gap-2.5 h-9 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700 dark:active:bg-gray-800/80 active:bg-white-600/80
                            dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700 dark:group-[.active]:active:bg-gray-800/80 group-[.active]:active:bg-white-600/80
                            dark:peer-hover:bg-gray-700 peer-hover:bg-white-700
                          "
                        >
                          <span
                            className={clsx(
                              'block w-2.5 h-2.5 rounded-sm', // group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
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

                          <span className="max-w-[172px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                            {list.title}
                          </span>
                        </div>
                      </Dialog.Close>
                    </NavLink>
                  ))}
              </div>
            </div>
          )}

          {notes.length !== 0 && (
            <div className="flex flex-col gap-2">
              <span className="px-px font-semibold text-2sm dark:text-gray-300 text-white-400">
                Notas
              </span>

              <div className="flex flex-col gap-0.5 px-px">
                {notesFiltereds.filter((note) => note.deleted === false)
                  .length === 0 && (
                    <span className="dark:text-gray-300 text-white-400">
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
                      <div className="absolute top-[4px] right-2 flex gap-2 peer">
                        <button
                          className="
                            p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                            dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                          "
                          onClick={() => console.log('Editar ' + note.title)}
                        >
                          <IconEdit width="19" height="19" />
                        </button>
                        <button
                          className="
                            p-1 rounded-md dark:active:bg-gray-500/40 active:bg-white-400/60 dark:hover:bg-gray-500/70 hover:bg-white-500/90
                            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                            dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                          "
                          onClick={(e) => {
                            console.log('Excluir ' + note.title);
                            handlePropagationLink(e);
                            handleEditNote(note.id, note.title, note.color, true);
                          }}
                        >
                          <IconTrash width="18" height="18" />
                        </button>
                      </div>

                      <Dialog.Close asChild>
                        <div
                          className="
                          flex items-center gap-2.5 h-9 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700 dark:active:bg-gray-800/80 active:bg-white-600/80
                          dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700 dark:group-[.active]:active:bg-gray-800/80 group-[.active]:active:bg-white-600/80
                          dark:peer-hover:bg-gray-700 peer-hover:bg-white-700
                        "
                        >
                          <span
                            className={clsx(
                              'block w-2.5 h-2.5 rounded-sm', // group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
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

                          <span className="max-w-[172px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                            {note.title}
                          </span>
                        </div>
                      </Dialog.Close>
                    </NavLink>
                  ))}
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default ModalSearch;
