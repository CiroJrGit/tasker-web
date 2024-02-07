import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';

import { PagesContext } from '../../contexts/pagesContext';
import { NoteProps } from '../../types/pagesProps';

import * as Popover from '@radix-ui/react-popover';
import EditPage from '../../components/EditPage';

import IconEllipsis from '../../assets/icons/IconEllipsis';

const Note = () => {
  const { notes, handleGetNote, loadingNotes } = useContext(PagesContext);

  const { id } = useParams();
  const [note, setNote] = useState<NoteProps | any>();

  useEffect(() => {
    getNote();
  }, [id, notes]);

  async function getNote() {
    if (id) {
      const noteResponse = await handleGetNote(id);
      setNote(noteResponse);
    }
  }

  return (
    <div className="h-full space-y-14">
      <div className="space-y-9">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span
              className={clsx('block  w-1.5 h-7 rounded-sm', {
                'bg-main-blue': note?.color === '#265EED',
                'bg-main-purple': note?.color === '#8029EE',
                'bg-main-pink': note?.color === '#EE29B7',
                'bg-main-red': note?.color === '#F4385A',
                'bg-main-yellow': note?.color === '#EE9329',
                'bg-main-green': note?.color === '#29EE9B',
              })}
              aria-hidden="true"
            ></span>

            <h1 className="font-semibold text-4xl dark:text-gray-50 text-gray-500">
              {note?.title}
            </h1>
          </div>

          <Popover.Root>
            <Popover.Trigger
              className="
                h-[34px] px-0.5 rounded-md text-3xl dark:text-gray-300 text-white-400 dark:hover:bg-gray-800/80 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
              "
            >
              <IconEllipsis width="30" height="30" />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="relative focus:outline-none">
                <div className="absolute -right-8 drop-shadow-md">
                  <EditPage page={note} type="note" />
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-32"></div>
    </div>
  );
};

export default Note;
