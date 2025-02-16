import { useState, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import Sidebar from '../components/Sidebar'

// import IconBack from '../assets/icons/IconBack'
// import IconEllipsis from '../assets/icons/IconEllipsis'
import IconFullScreenOn from '../assets/icons/IconFullScreenOn'
import IconFullScreenOff from '../assets/icons/IconFullScreenOff'

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [fullScreen, setFullScreen] = useState(false)

  return (
    <div
      className="
        flex justify-center items-center min-h-screen
        dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#373f55] dark:via-[#16181f] dark:to-[#282d41]
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-300 to-slate-500
      "
    >
      {/* dark:from-[#373f55] dark:via-[#16181f] dark:to-[#1d202e] */}
      {/* dark:from-navy-500 dark:via-navy-700 dark:to-navy-900 */}
      <div
        className={clsx(
          'relative grid grid-cols-[278px_1fr] text-gray-500 dark:text-gray-50 dark:bg-gray-950 bg-white-950 transition-all duration-400 ease-in-out overflow-hidden',
          'dark:drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.20)]',
          {
            'w-screen h-screen': fullScreen,
            'w-[1550px] h-[986px] rounded-lg': !fullScreen,
          },
        )}
      >
        <nav className="dark:bg-gray-900 bg-white-900 border-r dark:border-gray-700 border-white-800">
          <Sidebar />
        </nav>

        <div className="flex flex-col items-center min-h-full">
          <header className="flex justify-end items-center gap-3.5 w-full p-4">
            <NavLink
              to="/welcome"
              className="
                p-1.5 rounded-md font-int font-medium dark:text-gray-200 text-white-300
                dark:hover:bg-gray-800/80 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <div className="w-4 h-4"></div>
              {/* <IconBack width="18" height="18" /> */}
            </NavLink>

            <div
              className="
                flex justify-center items-center w-[30px] h-[30px] rounded-md
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <div className="w-4 h-4"></div>
              {/* <IconEllipsis width="26" height="26" /> */}
            </div>

            <button
              className="
                p-1.5 rounded-md font-int font-medium dark:text-gray-200 text-white-300
                dark:hover:bg-gray-800/80 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
              onClick={() => setFullScreen(!fullScreen)}
            >
              {!fullScreen ? (
                <IconFullScreenOn width="18" height="18" />
              ) : (
                <IconFullScreenOff width="18" height="18" />
              )}
            </button>
          </header>

          <main className="flex justify-center w-full pt-[104px] overflow-y-auto scrollbar">
            <div className="w-[752px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
