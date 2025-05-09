import { useThemeContext } from '@/contexts/themeContext'
import { ThemeLabels, ThemeOptions } from '@/types/themeTypes'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import IconCheck from '@/assets/icons/IconCheck'
import BaseDropdown from '../BaseDropdown'

interface ThemeDropdownProps {
  name: string
}

const ThemeDropdown = ({ name }: ThemeDropdownProps) => {
  const { theme, setTheme } = useThemeContext()

  const handleThemeChange = (value: string) => {
    if (value === 'light' || value === 'dark' || value === 'system') {
      setTheme(value)
    }
  }

  return (
    <BaseDropdown name={name}>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="relative left-1.5 min-w-[228px] px-1.5 py-1.5 rounded-md dark:bg-gray-800 bg-white-700 shadow-md"
          sideOffset={6}
          align="end"
        >
          <DropdownMenu.RadioGroup className="flex flex-col gap-0.5" value={theme} onValueChange={handleThemeChange}>
            <DropdownMenu.RadioItem
              className="
                flex justify-between items-center h-[26px] px-3 rounded dark:hover:bg-gray-600 hover:bg-white-500 cursor-pointer
                focus:outline-none data-[highlighted]:dark:bg-gray-600 data-[highlighted]:bg-white-500
              "
              value={ThemeOptions.DARK}
            >
              <span className="font-normal font-int text-sm dark:text-gray-100 text-gray-300">{ThemeLabels.dark}</span>

              <DropdownMenu.ItemIndicator className="flex items-center">
                <IconCheck width="15" height="15" stroke="2" color="dark:stroke-gray-50 stroke-gray-300" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="
                flex justify-between items-center h-[26px] px-3 rounded dark:hover:bg-gray-600 hover:bg-white-500 cursor-pointer
                focus:outline-none data-[highlighted]:dark:bg-gray-600 data-[highlighted]:bg-white-500
              "
              value={ThemeOptions.LIGHT}
            >
              <span className="font-normal font-int text-sm dark:text-gray-100 text-gray-300">{ThemeLabels.light}</span>

              <DropdownMenu.ItemIndicator className="flex items-center">
                <IconCheck width="15" height="15" stroke="2" color="dark:stroke-gray-50 stroke-gray-300" />
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
                <IconCheck width="15" height="15" stroke="2" color="dark:stroke-gray-50 stroke-gray-300" />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </BaseDropdown>
  )
}

export default ThemeDropdown
