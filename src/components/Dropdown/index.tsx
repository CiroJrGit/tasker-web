import { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import IconCheck from '../../assets/icons/IconCheck'
import IconCaret from '../../assets/icons/IconCaret'

enum ThemeOptions {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

enum ThemeLabels {
  'dark' = 'Escuro',
  'light' = 'Claro',
  'system' = 'Usar padrão do sistema',
}

const Dropdown = () => {
  const [themeOpt, setThemeOpt] = useState<string>(ThemeOptions.DARK)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="
            flex justify-center items-center gap-2 h-8 px-2.5 rounded-md dark:bg-gray-700 bg-white-700
            dark:hover:bg-gray-600/95 hover:bg-white-600
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 
          "
        aria-label="Customise options"
      >
        <span className="pb-px font-normal font-int text-sm dark:text-gray-100 text-gray-300">
          {ThemeLabels[themeOpt as keyof typeof ThemeLabels]}
        </span>

        <IconCaret
          width="10"
          height="10"
          color="dark:stroke-gray-300 stroke-white-300"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="relative left-1.5 min-w-[228px] px-1.5 py-1.5 rounded-md dark:bg-gray-800 bg-white-700 shadow-md"
          sideOffset={6}
          align="end"
        >
          <DropdownMenu.RadioGroup
            className="flex flex-col gap-0.5"
            value={themeOpt}
            onValueChange={setThemeOpt}
          >
            <DropdownMenu.RadioItem
              className="
                flex justify-between items-center h-[26px] px-3 rounded dark:hover:bg-gray-600 hover:bg-white-500 cursor-pointer
                focus:outline-none data-[highlighted]:dark:bg-gray-600 data-[highlighted]:bg-white-500
              "
              value={ThemeOptions.DARK}
            >
              <span className="font-normal font-int text-sm dark:text-gray-100 text-gray-300">
                {ThemeLabels.dark}
              </span>

              <DropdownMenu.ItemIndicator className="flex items-center">
                <IconCheck
                  width="15"
                  height="15"
                  stroke="2"
                  color="dark:stroke-gray-50 stroke-gray-300"
                />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="
                flex justify-between items-center h-[26px] px-3 rounded dark:hover:bg-gray-600 hover:bg-white-500 cursor-pointer
                focus:outline-none data-[highlighted]:dark:bg-gray-600 data-[highlighted]:bg-white-500
              "
              value={ThemeOptions.LIGHT}
            >
              <span className="font-normal font-int text-sm dark:text-gray-100 text-gray-300">
                {ThemeLabels.light}
              </span>

              <DropdownMenu.ItemIndicator className="flex items-center">
                <IconCheck
                  width="15"
                  height="15"
                  stroke="2"
                  color="dark:stroke-gray-50 stroke-gray-300"
                />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="
                flex justify-between items-center h-[26px] px-3 rounded dark:hover:bg-gray-600 hover:bg-white-500 cursor-pointer
                focus:outline-none data-[highlighted]:dark:bg-gray-600 data-[highlighted]:bg-white-500
              "
              value={ThemeOptions.SYSTEM}
            >
              <span className="font-normal font-int text-sm dark:text-gray-100 text-gray-300">
                {ThemeLabels.system}
              </span>

              <DropdownMenu.ItemIndicator className="flex items-center">
                <IconCheck
                  width="15"
                  height="15"
                  stroke="2"
                  color="dark:stroke-gray-50 stroke-gray-300"
                />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
