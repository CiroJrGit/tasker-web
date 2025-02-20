import { useContext, useEffect } from 'react'

import { ThemeContext } from '../../../contexts/themeContext'
import { PagesContext } from '../../../contexts/pagesContext'

import { DropdownType } from '../../../types/dropdownProps'
import { ThemeLabels } from '../../../types/themeProps'

import * as Switch from '@radix-ui/react-switch'
import * as Separator from '@radix-ui/react-separator'

import Dropdown from '../../Dropdown'
import IconPlus from '../../../assets/icons/IconPlus'

const AppearanceTab = () => {
  const { backgrounds, loadBackgrounds } = useContext(PagesContext)

  const { theme } = useContext(ThemeContext)
  const themeSelected = ThemeLabels[theme as keyof typeof ThemeLabels]

  useEffect(() => {
    if (!backgrounds) {
      loadBackgrounds()
    }
  }, [])

  return (
    <>
      <div className="flex flex-col gap-6 px-5">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">
            Personalização do usuário
          </span>

          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
              Imagem de fundo
            </span>

            <div className="grid grid-cols-7 gap-1.5 h-20 ">
              {backgrounds.defaultBackgrounds.map((background, index) => (
                <img
                  className="w-20 h-20 object-cover rounded-[5px]"
                  key={index}
                  src={background}
                  alt="tasker bgs"
                />
              ))}
              <div className="w-20 h-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-navy-500 via-navy-900 to-navy-700 rounded"></div>
              <div className="w-20 h-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-500 to-slate-300 rounded"></div>
              <div className="flex justify-center items-center aspect-square border-2 border-dashed border-gray-300 rounded">
                <IconPlus
                  width="20"
                  height="20"
                  color="dark:stroke-gray-300 stroke-gray-300"
                />
              </div>
            </div>
          </div>

          <label
            className="flex justify-between items-center gap-5 cursor-pointer"
            htmlFor="blur-mode"
          >
            <div className="flex flex-col gap-3 w-[352px]">
              <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                Efeito blur
              </span>
              <span className="text-2xs font-normal leading-3 dark:text-gray-200 text-white-300">
                Ative efeito de blur na imagem de fundo.
              </span>
            </div>

            <Switch.Root
              id="blur-mode"
              className="
                relative w-[32px] h-[20.5px] rounded-full border-[0.75px] dark:border-gray-400 border-white-400/60 dark:bg-gray-950 bg-white-700
                dark:data-[state=checked]:bg-gray-500 data-[state=checked]:bg-white-300 transition-colors duration-200 cursor-pointer
              "
            >
              <Switch.Thumb
                className="
                  block w-[16px] h-[16px] pb-px dark:bg-gray-50 bg-white-950 rounded-full transition-transform duration-200 translate-x-0.5 will-change-transform 
                  data-[state=checked]:translate-x-[13px] data-[state=checked]:dark:bg-white-950
                "
              />
            </Switch.Root>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-5">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">
            Configurações de Interface
          </span>

          <Separator.Root
            className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-col gap-3 w-[352px]">
              <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                Tema
              </span>
              <span className="text-2xs font-normal leading-3 dark:text-gray-200 text-white-300">
                Alterne entre os modos escuro e claro.
              </span>
            </div>

            <Dropdown type={DropdownType.THEME} name={themeSelected} />
          </div>

          <label
            className="flex justify-between items-center gap-5 cursor-pointer"
            htmlFor="transparent-mode"
          >
            <div className="flex flex-col gap-3 w-[352px]">
              <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                Transparência de interface
              </span>
              <span className="text-2xs font-normal leading-3 dark:text-gray-200 text-white-300">
                Ative efeito de transparência na interface do Tasker.
              </span>
            </div>

            <Switch.Root
              id="transparent-mode"
              className="
                relative w-[32px] h-[20.5px] rounded-full border-[0.75px] dark:border-gray-400 border-white-400/60 dark:bg-gray-950 bg-white-700
                dark:data-[state=checked]:bg-gray-500 data-[state=checked]:bg-white-300 transition-colors duration-200 cursor-pointer
              "
            >
              <Switch.Thumb
                className="
                  block w-[16px] h-[16px] pb-px dark:bg-gray-50 bg-white-950 rounded-full transition-transform duration-200 translate-x-0.5 will-change-transform 
                  data-[state=checked]:translate-x-[13px] data-[state=checked]:dark:bg-white-950
                "
              />
            </Switch.Root>
          </label>
        </div>
      </div>
    </>
  )
}

export default AppearanceTab
