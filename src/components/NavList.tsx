import { useEffect } from 'react'
import { useTaskLists } from '../hooks/useTaskLists'
import { useNotes } from '../hooks/useNotes'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const NavList = () => {
  const { taskLists, loadTaskLists } = useTaskLists()
  const { notes, loadNotes } = useNotes()

  useEffect(() => {
    loadTaskLists()
    loadNotes()
  }, [])

  return (
    <nav className="flex flex-col gap-9 font-int">
      {taskLists.filter((list) => list.deleted === false).length !== 0 && (
        <div className="flex flex-col gap-2">
          <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">Listas</span>

          <div className="flex flex-col gap-1">
            {taskLists
              .filter((list) => list.deleted === false)
              .map((list) => (
                <NavLink
                  key={list.id}
                  to={`/tasklists/${list.id}`}
                  className="rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                >
                  <div
                    className="
                      flex items-center gap-2.5 h-8 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/75 dark:active:bg-gray-700/70 active:bg-white-600/75
                      dark:group-[.active]:bg-gray-700 group-[.active]:bg-white-700/70 dark:group-[.active]:active:bg-gray-700/70 group-[.active]:active:bg-white-600/75
                    "
                  >
                    <span
                      className={clsx(
                        'block w-2 h-2 rounded-sm', // TO-DO: Refinar codigo group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
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

                    <span className="max-w-[168px] text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                      {list.title}
                    </span>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}

      {notes.filter((note) => note.deleted === false).length !== 0 && (
        <div className="flex flex-col gap-2">
          <span className="px-2 font-semibold text-xs dark:text-gray-300 text-white-400">Notas</span>

          <div className="flex flex-col gap-0.5 px-px">
            {notes
              .filter((note) => note.deleted === false)
              .map((note, index) => (
                <NavLink
                  key={index}
                  to={`/notes/${note.id}`}
                  className="rounded-m focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                >
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

                    <span className="max-w-[172px] text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                      {note.title}
                    </span>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavList
