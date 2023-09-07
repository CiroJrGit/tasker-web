import { useState, KeyboardEvent } from 'react';
import clsx from 'clsx';

import { HiOutlinePlus } from 'react-icons/hi';

const NewTask = () => {
  // const { handleCreateTask } = useContext(TaskListContext);
  const [desc, setDesc] = useState('');

  function handleInputEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleCreateTaskForm();
    }
  }

  function handleCreateTaskForm() {
    // handleCreateTask(desc, listId).then(() => {
    //   setDesc('');
    // });

    console.log(desc);
  }

  return (
    <>
      <input
        className="
          w-full h-full text-lg dark:placeholder:text-gray-300 placeholder:text-gray-200 dark:text-gray-50 text-gray-500
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
        <HiOutlinePlus
          className={clsx('text-xl dark:text-gray-300 text-white-400', {
            'dark:text-gray-50 text-gray-500': desc,
          })}
        />
      </button>
    </>
  );
};

export default NewTask;
