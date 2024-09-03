import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

import * as Switch from '@radix-ui/react-switch';
import IconMoon from '../assets/icons/IconMoon';
import IconSun from '../assets/icons/IconSun';

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch.Root
        className="
          flex items-center gap-1 rounded-lg border dark:bg-gray-950 bg-white-950 dark:border-gray-400 border-white-300
          focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
        "
        id="toggle-theme"
        defaultChecked={theme !== 'dark'}
        onCheckedChange={toggleTheme}
      >
        <div className="flex justify-center items-center pl-0.5 w-9 h-8 rounded-md">
          <IconMoon
            width="14"
            height="14"
            color="dark:fill-gray-950 fill-white-300"
          />
        </div>
        <div className="flex justify-center items-center pr-0.5 w-9 h-8 rounded-md">
          <IconSun
            width="15"
            height="15"
            color="dark:fill-gray-50 fill-white-950"
          />
        </div>
        <Switch.Thumb
          className="
            absolute flex justify-center items-center w-9 h-[29px] rounded-md dark:bg-gray-500 bg-white-300
            translate-x-[1.5px] will-change-transform data-[state=checked]:translate-x-[38.5px] transition-transform ease-in-out duration-300
          "
        >
          {theme === 'light' ? (
            <IconSun width="15" height="15" color="fill-white-950" />
          ) : (
            <IconMoon width="14" height="14" color="fill-gray-50" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};

export default Toggle;
