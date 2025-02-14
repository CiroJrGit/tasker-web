import { useState, useContext, KeyboardEvent } from 'react'
import { PagesContext } from '../../../contexts/pagesContext'

import IconPlus from '../../../assets/icons/IconPlus'

interface NewTaskProps {
  listId: string
}

const NewTask = ({ listId }: NewTaskProps) => {
  const { handleCreateTask } = useContext(PagesContext)
  const [desc, setDesc] = useState('')

  function handleInputEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleCreateTaskForm()
    }
  }

  function handleCreateTaskForm() {
    handleCreateTask(desc, listId).then(() => {
      setDesc('')
    })
  }

  return (
    <>
      <input
        className="
          w-full h-full pt-px dark:placeholder:text-gray-300 placeholder:text-gray-200 dark:text-gray-50 text-gray-500
          bg-transparent focus:outline-none peer
        "
        type="text"
        value={desc}
        placeholder="Adicione uma tarefa"
        onChange={(e) => setDesc(e.target.value)}
        onKeyDown={handleInputEnter}
      />
      <button
        className="rounded-md p-1 disabled:cursor-auto disabled:hover:dark:bg-transparent disabled:hover:bg-transparent ease-in-out duration-100"
        disabled={!desc}
        onClick={handleCreateTaskForm}
      >
        <IconPlus
          width="16"
          height="16"
          color={
            desc
              ? 'dark:stroke-gray-50 stroke-gray-500'
              : 'dark:stroke-gray-300 stroke-white-300'
          }
        />
      </button>
    </>
  )
}

export default NewTask
