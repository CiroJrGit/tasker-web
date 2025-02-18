import { ThemeLabels } from '../../types/themeProps'
import { DropdownProps, DropdownType } from '../../types/dropdownProps'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Theme from './Theme'

import IconCaret from '../../assets/icons/IconCaret'

const Dropdown = ({ name, type }: DropdownProps) => {
  const triggerName = ThemeLabels[name as keyof typeof ThemeLabels]

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
          {triggerName}
        </span>

        <IconCaret
          width="10"
          height="10"
          color="dark:stroke-gray-300 stroke-white-300"
        />
      </DropdownMenu.Trigger>

      {type === DropdownType.THEME && <Theme />}
    </DropdownMenu.Root>
  )
}

export default Dropdown
