import { useContext, useEffect } from 'react'

import { PagesContext } from '../../contexts/pagesContext'

import Upload from '../Upload'
import IconCheck from '../../assets/icons/IconCheck'

const BackgroundSelection = () => {
  const { userBackground, setUserBackground, backgrounds, loadBackgrounds, handleBackgroundUser } =
    useContext(PagesContext)

  const handleBackgroundChange = (bgItem: string) => {
    setUserBackground(bgItem)
    handleBackgroundUser(bgItem)
  }

  useEffect(() => {
    if (!backgrounds) {
      loadBackgrounds()
    }
  }, [])

  return (
    <div className="flex justify-between h-[85px]">
      {backgrounds.defaultBackgrounds.map((bgItem, index) => (
        <button
          key={index}
          className={`
            w-[90px] h-[85px] rounded-md bg-cover bg-center border
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 dark:hover:border-gray-300 hover:border-white-500
            ${bgItem === userBackground ? 'dark:border-gray-100 border-gray-400' : 'dark:border-gray-900 border-white-900'}
          `}
          style={{ backgroundImage: `url(${bgItem})` }}
          onClick={() => handleBackgroundChange(bgItem)}
        >
          {bgItem === userBackground && (
            <div className="flex justify-end items-end w-full h-full py-1.5 px-2 rounded-md bg-gray-300 bg-opacity-40">
              <IconCheck width="18" height="18" color="stroke-white-950" stroke="1.5" />
            </div>
          )}
        </button>
      ))}

      {/* TO-DO: refinar card de fundo padrão do sistema */}
      <button
        className={`
          w-[90px] h-[85px] rounded-md bg-cover bg-center border
          focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 dark:hover:border-gray-300 hover:border-white-500
          ${userBackground === 'default-system' ? 'dark:border-gray-100 border-gray-400' : 'dark:border-gray-900 border-white-900'}
        `}
        style={{ backgroundImage: `url(${backgrounds.defaultSystemCard})` }}
        onClick={() => handleBackgroundChange('default-system')}
      >
        {userBackground === 'default-system' && (
          <div className="flex justify-end items-end w-full h-full py-1.5 px-2 rounded-md bg-gray-300 bg-opacity-40">
            <IconCheck width="18" height="18" color="stroke-white-950" stroke="1.5" />
          </div>
        )}
      </button>

      <Upload />
    </div>
  )
}

export default BackgroundSelection
