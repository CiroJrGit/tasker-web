import { useEffect } from 'react'
import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'
import { NavLink } from 'react-router-dom'
import PageItem from '../Button/PageItem'

const PageList = () => {
  const { taskLists, loadTaskLists, handleEditTaskList } = useTaskLists()
  const { notes, loadNotes, handleEditNote } = useNotes()

  useEffect(() => {
    loadTaskLists()
    loadNotes()
  }, [])

  return (
    <nav className="flex flex-col gap-9">
      {taskLists.filter((list) => list.deleted === false).length !== 0 && (
        <div className="flex flex-col gap-2">
          <span className="px-2 text-xs font-title font-semibold dark:text-gray-300 text-white-400">Listas</span>

          <div className="flex flex-col gap-0.75">
            {taskLists
              .filter((list) => list.deleted === false)
              .map((list) => (
                <NavLink
                  key={list.id}
                  to={`/tasklists/${list.id}`}
                  className="relative rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                >
                  <PageItem
                    variant="active"
                    color={list.color}
                    title={list.title}
                    onPrimaryAction={() => console.log('Editar ' + list.title)}
                    onSecondaryAction={() => handleEditTaskList(list.id, list.title, list.color, true)}
                  />
                </NavLink>
              ))}
          </div>
        </div>
      )}

      {notes.filter((note) => note.deleted === false).length !== 0 && (
        <div className="flex flex-col gap-2">
          <span className="px-2 text-xs font-title font-semibold dark:text-gray-300 text-white-400">Notas</span>

          <div className="flex flex-col gap-0.75">
            {notes
              .filter((note) => note.deleted === false)
              .map((note, index) => (
                <NavLink
                  key={index}
                  to={`/notes/${note.id}`}
                  className="relative rounded-m focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 group"
                >
                  <PageItem
                    variant="active"
                    color={note.color}
                    title={note.title}
                    onPrimaryAction={() => console.log('Editar ' + note.title)}
                    onSecondaryAction={() => handleEditNote(note.id, note.title, note.color, true)}
                  />
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default PageList
