import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/authContext'

import * as Switch from '@radix-ui/react-switch'
import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'
import Toggle from './Toggle'
import Button from './Button'

import IconPlus from '../assets/icons/IconPlus'

const ModalUser = () => {
  const { user } = useContext(AuthContext)

  const [username, setUsername] = useState(user.name || '')

  return (
    <>
      <div className="flex flex-col justify-between min-w-[638px] h-[586px] mt-2">
        <Tabs.Root className="space-y-10" defaultValue="tab1">
          <Tabs.List
            className="flex gap-6 px-4"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="
                pt-2 pb-1.5 font-medium font-int leading-tight text-xs dark:text-gray-200 text-white-300 focus:outline-none cursor-pointer select-none
                border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-main-blue
              "
              value="tab1"
            >
              Perfil
            </Tabs.Trigger>
            <Tabs.Trigger
              className="
                pt-2 pb-1.5 font-medium font-int leading-tight text-xs dark:text-gray-200 text-white-300 focus:outline-none cursor-pointer select-none
                border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-main-blue
              "
              value="tab2"
            >
              Aparência
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="flex flex-col gap-14" value="tab1">
            <div className="flex flex-col gap-6 px-5">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">
                  Meu perfil
                </span>

                <Separator.Root
                  className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                  decorative
                />
              </div>

              <div className="flex items-center gap-3.5">
                <div
                  className="
                    flex justify-center items-center w-[60px] h-[56px] rounded-xl text-4xl font-medium dark:text-gray-100 text-gray-300
                    border dark:border-gray-500 border-white-500/40 dark:bg-gray-500 bg-white-600
                  "
                >
                  <span className="duration-40 pb-px">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-col gap-3 w-[330px]">
                  <span className="text-sm font-medium font-int leading-3 dark:text-gray-100 text-gray-300">
                    Nome
                  </span>
                  <input
                    className="
                      w-full h-8 px-3 rounded text-sm dark:text-gray-50 text-gray-500 dark:bg-gray-700 bg-white-700
                      focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
                    "
                    type="text"
                    defaultValue={user.name}
                    placeholder="Digite um nome de usuário"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7 px-5">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium font-int dark:text-gray-100 text-gray-300">
                  Segurança
                </span>

                <Separator.Root
                  className="dark:bg-gray-500/70 bg-gray-100/60 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                  decorative
                />
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex justify-between items-center gap-3.5">
                  <div className="flex flex-col gap-3 w-[352px]">
                    <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                      Email
                    </span>
                    <span className="text-2xs font-normal leading-3 dark:text-gray-200 text-white-300">
                      {user.email}
                    </span>
                  </div>

                  <div>
                    <Button variant="secondary" size="sm" label="Alterar" />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-3.5">
                  <div className="flex flex-col gap-3 w-[352px]">
                    <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                      Senha
                    </span>
                    <span className="text-2xs font-normal leading-3 dark:text-gray-200 text-white-300">
                      Altere caso tenha esquecido ou note algo suspeito.
                    </span>
                  </div>

                  <div>
                    <Button variant="secondary" size="sm" label="Alterar" />
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content className="flex flex-col gap-14" value="tab2">
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
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-normal font-int leading-3 dark:text-gray-100 text-gray-300">
                    Imagem de fundo
                  </span>

                  <div className="grid grid-cols-7 gap-1.5">
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

            <div className="flex justify-between items-center gap-6 px-5">
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
          </Tabs.Content>
        </Tabs.Root>

        <div className="flex justify-end gap-3 px-6">
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
      </div>
    </>
  )
}

export default ModalUser
