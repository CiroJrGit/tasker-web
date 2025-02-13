import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
// import { PagesContext } from '../contexts/pagesContext';

import * as Switch from '@radix-ui/react-switch'
import * as Dialog from '@radix-ui/react-dialog'
import Toggle from './Toggle'
import Button from './Button'

import IconPlus from '../assets/icons/IconPlus'

const ModalUser = () => {
  const { user } = useContext(AuthContext)
  // const { backgrds, loadBackgrpunds } = useContext(PagesContext);

  const [username, setUsername] = useState(user.name || '')

  // TO-DO: backgrounds
  // useEffect(() => {
  //   loadBackgrpunds();
  // }, []);

  return (
    <>
      <div className="min-w-[496px] mt-8 space-y-10">
        <div className="flex flex-col gap-4">
          <span className="dark:text-gray-100 text-gray-300 font-medium font-int">
            Imagem de fundo
          </span>

          <div className="grid grid-cols-7 gap-1.5">
            {/* {backgrds.map((backgrd) => (
              <img
                className="aspect-square"
                src={backgrd.imageURL}
                alt="imagens de fundo do uuário"
                key={backgrd.id}
              />
            ))} */}
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="aspect-square dark:bg-gray-600 bg-white-600 rounded"></div>
            <div className="flex justify-center items-center aspect-square border-2 border-dashed border-gray-300 rounded">
              <IconPlus
                width="20"
                height="20"
                color="dark:stroke-gray-300 stroke-gray-300"
              />
            </div>
          </div>

          <div className="flex justify-between gap-5 mt-1">
            <label
              className="text-sm font-medium font-int dark:text-gray-300 text-white-400 select-none cursor-pointer"
              htmlFor="blur-mode"
            >
              Efeito blur
            </label>

            <div>
              <Switch.Root
                className="
                  relative w-[32px] h-[20.5px] rounded-full border-[0.75px] dark:border-gray-400 border-white-400/60 dark:bg-gray-950 bg-white-700
                  dark:data-[state=checked]:bg-gray-500 data-[state=checked]:bg-white-300 transition-colors duration-200 cursor-pointer
                "
                // bg-gray-500 data-[state=checked]:bg-gray-200
                id="blur-mode"
              >
                <Switch.Thumb
                  className="
                    block w-[16px] h-[16px] pb-px dark:bg-gray-50 bg-white-950 rounded-full transition-transform duration-200 translate-x-0.5 will-change-transform 
                    data-[state=checked]:translate-x-[13px] data-[state=checked]:dark:bg-white-950
                  "
                />
              </Switch.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="dark:text-gray-100 text-gray-300 font-medium font-int">
            Nome
          </span>

          <div>
            <input
              className="
                w-full h-9 px-3 pb-px rounded  dark:text-gray-50 text-gray-800 dark:placeholder:text-gray-200 placeholder:text-white-300 dark:bg-gray-700 bg-white-700
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
              type="text"
              defaultValue={user.name}
              placeholder="Digite um nome de usuário"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="dark:text-gray-100 text-gray-300 font-medium font-int">
            Email
          </span>

          <div>
            <input
              className="
                w-full h-9 px-3 pb-px rounded font-medium border-2 dark:border-gray-400 border-white-400/90 dark:text-gray-100 text-gray-950 bg-transparent opacity-50 cursor-text
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
              type="text"
              defaultValue={user.email}
              disabled
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <label
            className="dark:text-gray-100 text-gray-300 font-medium font-int select-none cursor-pointer"
            htmlFor="toggle-theme"
          >
            Tema
          </label>

          <div>
            <Toggle />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-20">
        <Dialog.Close asChild>
          <Button
            variant="primary"
            size="md"
            label="Salvar"
            // onClick={}
            disabled={!username.trim()}
          />
        </Dialog.Close>

        <Dialog.Close asChild>
          <Button variant="secondary" size="md" label="Cancelar" />
        </Dialog.Close>
      </div>
    </>
  )
}

export default ModalUser
