/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PagesContext } from '../contexts/pagesContext';
import { TaskListProps, NoteProps } from '../types/pagesProps';
import clsx from 'clsx';

import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';

import IconEdit from '../assets/icons/IconEdit';
import IconTrash from '../assets/icons/IconTrash';
import IconCheck from '../assets/icons/IconCheck';

interface EditPageProps {
  page: TaskListProps | NoteProps;
  type: string;
}

const EditPage = ({ page, type }: EditPageProps) => {
  const { handleEditTaskList, handleEditNote } = useContext(PagesContext);

  const navigate = useNavigate();
  const colors = [
    '#265EED',
    '#8029EE',
    '#EE29B7',
    '#F4385A',
    '#EE9329',
    '#29EE9B',
  ];

  return (
    <>
      <div className="flex flex-col gap-4 mt-1 px-1 rounded-lg font-int dark:bg-gray-800 bg-white-800">
        <div className="pt-2">
          <span className="px-2.5 font-medium text-3xs dark:text-gray-300 text-white-300">
            Configs. da página
          </span>
          <Separator.Root
            className="mt-2 dark:bg-gray-500 bg-gray-100 opacity-70 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />
        </div>

        <div className="space-y-5 pb-3.5 dark:text-gray-100 text-gray-300">
          <div className="px-2.5 font-medium text-sm">
            <span>Cor de destaque</span>
            <div className="flex gap-1.5 mt-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={clsx(
                    'flex justify-center items-center w-[22px] h-[22px] pt-px rounded-md hover:bg-opacity-75 focus:outline-none focus-visible:ring-1.5',
                    'dark:focus-visible:ring-gray-200 focus-visible:ring-gray-200/90 ring-offset-1 dark:ring-offset-gray-700 ring-offset-white-700',
                    {
                      'bg-main-blue': color === '#265EED',
                      'bg-main-purple': color === '#8029EE',
                      'bg-main-pink': color === '#EE29B7',
                      'bg-main-red': color === '#F4385A',
                      'bg-main-yellow': color === '#EE9329',
                      'bg-main-green': color === '#29EE9B',

                      'ring-1 ring-gray-200 ring-offset-2':
                        color === page.color,
                    },
                  )}
                  onClick={
                    type === 'tasklist'
                      ? () => handleEditTaskList(page.id, page.title, color, page.deleted)
                      : () => handleEditNote(page.id, page.title, color, page.deleted)
                  }
                >
                  {color === page.color && (
                    <IconCheck
                      width="14"
                      height="14"
                      color="stroke-gray-50"
                      stroke="2.2"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5 px-1">
            <Dialog.Root>
              <Dialog.Trigger
                className="
                  flex items-center gap-2 h-8 px-2.5 rounded-md dark:hover:bg-gray-600/95 hover:bg-white-600 dark:active:bg-gray-600/60 active:bg-white-600
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
                "
                type="button"
              >
                <div className="flex items-center w-6 h-6">
                  <IconEdit width="18" height="19" />
                </div>

                <span className="pt-px font-medium text-sm">Renomear</span>
              </Dialog.Trigger>

              {/* <Modal type="edit" list={list} /> */}
            </Dialog.Root>

            <button
              className="
                flex items-center gap-2 h-8 px-2.5 rounded-md dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
              "
              onClick={
                type === 'tasklist'
                  ? () => { handleEditTaskList(page.id, page.title, page.color, true); navigate('/welcome'); }
                  : () => { handleEditNote(page.id, page.title, page.color, true); navigate('/welcome'); }
              }
            >
              <div className="flex items-center w-6">
                <IconTrash width="16" height="16" />
              </div>
              <span className="font-medium text-sm">Excluir</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
