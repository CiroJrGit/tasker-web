import { useState } from 'react';
import clsx from 'clsx';

import { ListProps } from '../types/tasklistProps';

import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Popover from '@radix-ui/react-popover';
import Button from './Button';

import IconCheck from '../assets/icons/IconCheck';
import IconNote from '../assets/icons/IconNote';
import IconCaret from '../assets/icons/IconCaret';
import { TbCheck } from 'react-icons/tb';

interface ModalNewPageProps {
  list?: ListProps;
  type?: string;
  page?: string;
}

const ModalNewPage = ({ type, list, page }: ModalNewPageProps) => {
  const [selectedColor, setSelectedColor] = useState('#265EED');
  const colors = [
    '#265EED',
    '#8029EE',
    '#EE29B7',
    '#F4385A',
    '#EE9329',
    '#29EE9B',
  ];

  const [selectedOption, setSelectedOption] = useState<string>(page || '');
  const [title, setTitle] = useState('');

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-col gap-5">
        <RadioGroup.Root
          className="flex gap-3"
          defaultValue={page}
          aria-label="Page type"
        >
          <div className="flex items-center">
            <RadioGroup.Item
              className="hidden peer"
              value="tasklist"
              id="r1"
              onClick={() => setSelectedOption('tasklist')}
            />
            <label
              className="
                flex items-center gap-2 px-2 py-1.5 rounded-md dark:text-gray-100/70 text-gray-300/90 cursor-pointer
                dark:hover:text-gray-100 hover:text-gray-400 dark:hover:bg-gray-800 hover:bg-white-800/90
                peer-aria-checked:dark:bg-gray-600/90 peer-aria-checked:bg-white-600/70 peer-aria-checked:dark:text-gray-100 peer-aria-checked:text-gray-400
              "
              htmlFor="r1"
            >
              <IconCheck
                width="18"
                height="18"
                color="dark:stroke-gray-100/60 stroke-gray-300/75"
              />
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
                flex items-center gap-2 px-2 py-1.5 rounded-md dark:text-gray-100/70 text-gray-300/90 cursor-pointer
                dark:hover:text-gray-100 hover:text-gray-400 dark:hover:bg-gray-800 hover:bg-white-800/90
                peer-aria-checked:dark:bg-gray-600/90 peer-aria-checked:bg-white-600/70 peer-aria-checked:dark:text-gray-100 peer-aria-checked:text-gray-400
              "
              htmlFor="r2"
            >
              <IconNote
                width="19"
                height="19"
                color="dark:stroke-gray-100/60 stroke-gray-300/80"
              />
              <span className="text-sm font-medium duration-10">
                Página de anotações
              </span>
            </label>
          </div>
        </RadioGroup.Root>

        <div className="flex gap-3">
          <Popover.Root>
            <Popover.Trigger
              className="
                flex flex-row items-center gap-3 p-2.5 rounded-lg dark:bg-gray-700 bg-white-700
                dark:hover:bg-gray-600/70 hover:bg-white-800/90 dark:active:bg-gray-700/90 active:bg-white-600/75
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <div className="w-5 h-5 rounded-md bg-main-blue" />
              <IconCaret
                width="11"
                height="11"
                color="dark:stroke-gray-300 stroke-white-300"
              />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="focus:outline-none">
                <div className="relative left-[95px] flex gap-5 mt-4 px-4 py-3 rounded-lg dark:bg-gray-800 bg-white-700 drop-shadow-md">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={clsx(
                        'flex justify-center items-center w-5 h-5 rounded-md hover:bg-opacity-75 focus:outline-none focus-visible:ring-1.5',
                        'dark:focus-visible:ring-gray-200 focus-visible:ring-gray-200/90 ring-offset-1 dark:ring-offset-gray-700 ring-offset-white-700',
                        /* eslint-disable prettier/prettier */
                        {
                          'bg-main-blue ring-gray-200': color === '#265EED',
                          'bg-main-purple ring-main-purple': color === '#8029EE',
                          'bg-main-pink ring-main-pink': color === '#EE29B7',
                          'bg-main-red ring-main-red': color === '#F4385A',
                          'bg-main-yellow ring-main-yellow': color === '#EE9329',
                          'bg-main-green ring-main-green': color === '#29EE9B',

                          'ring-1 ring-offset-2': color === selectedColor,
                          // dark:ring-gray-100 ring-gray-400
                        },
                      )}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color === selectedColor && (
                        <TbCheck className="text-md dark:text-gray-50 text-gray-900" />
                      )}
                    </button>
                  ))}
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <input
            className="
              w-full h-11 px-5 rounded-md dark:text-gray-50 text-gray-400 dark:placeholder:text-gray-200 placeholder:text-white-300 dark:bg-gray-700 bg-white-700
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="text"
            defaultValue={type === 'edit' ? list?.title : ''}
            placeholder="Título da página..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Dialog.Close asChild>
          <Button
            variant='primary'
            size='md'
            label="Criar"
            onClick={() => {
              console.log(selectedOption);
            }}
          />
        </Dialog.Close>

        <Dialog.Close asChild>
          <Button
            variant='secondary'
            size='md'
            label="Cancelar"
          />
        </Dialog.Close>
      </div>
    </div>
  );
};

export default ModalNewPage;
