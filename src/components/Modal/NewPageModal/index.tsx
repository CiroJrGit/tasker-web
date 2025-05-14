import { useState } from 'react'
import { useTaskLists } from '@/hooks/useTaskLists'
import { useNotes } from '@/hooks/useNotes'
import clsx from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import BaseModal from '../BaseModal'
import Button from '@/components/Button'

import IconCheckbox from '@/assets/icons/IconCheckbox'
import IconNote from '@/assets/icons/IconNote'
import IconCheck from '@/assets/icons/IconCheck'

interface NewPageModalProps {
  page?: string
}

const NewPageModal = ({ page }: NewPageModalProps) => {
  const { handleCreateTaskList } = useTaskLists()
  const { handleCreateNote } = useNotes()

  const [titlePage, setTitlePage] = useState('')
  const [selectedOption, setSelectedOption] = useState<string>(page || '')
  const [selectedColor, setSelectedColor] = useState('#265EED')

  const colors = ['#265EED', '#8029EE', '#EE29B7', '#F4385A', '#EE9329', '#29EE9B']

  return (
    <BaseModal title="Nova página">
      <div className="flex flex-col gap-18 min-w-[506px] min-h-[324px] mt-5 px-4">
        <div className="flex flex-col gap-8">
          <RadioGroup.Root className="flex gap-3" defaultValue={page} aria-label="Page type">
            <div className="flex">
              <RadioGroup.Item
                className="hidden peer"
                value="tasklist"
                id="r1"
                onClick={() => setSelectedOption('tasklist')}
              />
              <label
                className="
                  flex flex-col gap-3 min-w-52 px-3 py-3.5 rounded-2xl dark:text-gray-100 text-gray-300 cursor-pointer
                  dark:hover:bg-gray-800 hover:bg-white-800 border dark:border-gray-500 border-gray-100
                  peer-aria-checked:dark:bg-gray-700 peer-aria-checked:bg-white-700
                  peer-aria-checked:dark:border-gray-100 peer-aria-checked:border-gray-300
                "
                htmlFor="r1"
              >
                <IconCheckbox
                  width="20"
                  height="20"
                  color={
                    selectedOption === 'tasklist'
                      ? 'dark:stroke-gray-100 stroke-gray-400'
                      : 'dark:stroke-gray-500 stroke-white-300'
                  }
                />

                <div className="flex flex-col gap-px">
                  <span
                    className={clsx('font-medium text-sm dark:text-gray-100 text-gray-300', {
                      'dark:text-gray-50 text-gray-500': selectedOption === 'tasklist',
                    })}
                  >
                    Listas
                  </span>
                  <span className="text-xs font-medium dark:text-gray-300 text-white-300">
                    Crie e conclua lista de tarefas
                  </span>
                </div>
              </label>
            </div>

            <div className="flex">
              <RadioGroup.Item
                className="hidden peer"
                value="notes"
                id="r2"
                onClick={() => setSelectedOption('notes')}
              />
              <label
                className="
                  flex flex-col gap-3 min-w-52 px-3 py-3.5 rounded-2xl dark:text-gray-100 text-gray-300 cursor-pointer
                  dark:hover:bg-gray-800 hover:bg-white-800 border dark:border-gray-500 border-gray-100
                  peer-aria-checked:dark:bg-gray-700 peer-aria-checked:bg-white-700
                  peer-aria-checked:dark:border-gray-100 peer-aria-checked:border-gray-300
                "
                htmlFor="r2"
              >
                <IconNote
                  width="21"
                  height="21"
                  color={
                    selectedOption === 'notes'
                      ? 'dark:stroke-gray-100 stroke-gray-400'
                      : 'dark:stroke-gray-500 stroke-white-300'
                  }
                />
                <div className="flex flex-col gap-px">
                  <span
                    className={clsx('font-medium text-sm dark:text-gray-100 text-gray-300', {
                      'dark:text-gray-50 text-gray-500': selectedOption === 'notes',
                    })}
                  >
                    Anotações
                  </span>
                  <span className="text-xs font-medium dark:text-gray-300 text-white-300">
                    Crie e edite suas anotações
                  </span>
                </div>
              </label>
            </div>
          </RadioGroup.Root>

          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">Título</span>

              <input
                className="
                  w-full h-8.5 px-2.5 rounded text-sm dark:text-gray-50 text-gray-500 dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-700
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
                "
                type="text"
                placeholder="Título da página..."
                onChange={(e) => setTitlePage(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center gap-3">
              <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">Cor de destaque</span>

              <div className="flex gap-2.5 pt-0.5">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={clsx(
                      'flex justify-center items-center w-5 h-5 pt-px rounded-[5px] hover:bg-opacity-75 focus:outline-none focus-visible:ring-1.5',
                      'dark:focus-visible:ring-gray-200 focus-visible:ring-gray-200/90 ring-offset-1 dark:ring-offset-gray-700 ring-offset-white-700',
                      {
                        'bg-main-blue ring-main-blue': color === '#265EED',
                        'bg-main-purple ring-main-purple': color === '#8029EE',
                        'bg-main-pink ring-main-pink': color === '#EE29B7',
                        'bg-main-red ring-main-red': color === '#F4385A',
                        'bg-main-yellow ring-main-yellow': color === '#EE9329',
                        'bg-main-green ring-main-green': color === '#29EE9B',

                        'ring-[0.8px] ring-offset-[1.3px]': color === selectedColor,
                      },
                    )}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color === selectedColor && (
                      <IconCheck width="13" height="13" color="stroke-gray-50" stroke="2.2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Dialog.Close asChild>
            <Button
              variant="primary"
              size="md"
              label="Criar"
              onClick={
                selectedOption === 'tasklist'
                  ? () => handleCreateTaskList(titlePage, selectedColor)
                  : () => handleCreateNote(titlePage, selectedColor)
              }
              disabled={!titlePage.trim() || selectedOption === ''}
            />
          </Dialog.Close>

          <Dialog.Close asChild>
            <Button variant="secondary" size="md" label="Cancelar" />
          </Dialog.Close>
        </div>
      </div>
    </BaseModal>
  )
}

export default NewPageModal
