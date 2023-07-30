import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import IconCheck from '../assets/icons/IconCheck';
import IconNote from '../assets/icons/IconNote';

const ModalNewPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="mt-7">
      <RadioGroup.Root className="flex gap-3" aria-label="Page type">
        <div className="flex items-center">
          <RadioGroup.Item
            className="hidden peer"
            value="tasklist"
            id="r1"
            onClick={() => setSelectedOption('tasklist')}
          />
          <label
            className="
              flex items-center gap-2 px-2 py-1.5 rounded-md dark:text-gray-200 text-white-300 cursor-pointer
              dark:hover:bg-gray-800 hover:bg-white-800/90 dark:active:bg-gray-800/60 active:bg-white-600/60
              peer-aria-checked:dark:bg-gray-600 peer-aria-checked:bg-white-600/90 peer-aria-checked:dark:text-gray-100 peer-aria-checked:text-gray-400
            "
            htmlFor="r1"
          >
            <IconCheck width="18" height="18" stroke={selectedOption} />
            <span className="text-sm font-medium duration-10">
              Lista de tarefas
            </span>
          </label>
        </div>

        <div className="flex items-center">
          <RadioGroup.Item
            className="hidden peer"
            value="notes"
            id="r2"
            onClick={() => setSelectedOption('notes')}
          />
          <label
            className="
              flex items-center gap-2 px-2 py-1.5 rounded-md dark:text-gray-200 text-white-300 cursor-pointer
              dark:hover:bg-gray-800 hover:bg-white-800/90 dark:active:bg-gray-800/60 active:bg-white-600/60
              peer-aria-checked:dark:bg-gray-600 peer-aria-checked:bg-white-600/90 peer-aria-checked:dark:text-gray-100 peer-aria-checked:text-gray-400
            "
            htmlFor="r2"
          >
            <IconNote width="19" height="19" stroke={selectedOption} />
            <span className="text-sm font-medium duration-10">
              Página de anotações
            </span>
          </label>
        </div>
      </RadioGroup.Root>

      <div className="flex justify-end gap-2">
        <Dialog.Close asChild>
          <button
            onClick={() => {
              console.log(selectedOption);
            }}
          >
            Criar
          </button>
        </Dialog.Close>

        <Dialog.Close className="secondary">Voltar</Dialog.Close>
      </div>
    </div>
  );
};

export default ModalNewPage;
