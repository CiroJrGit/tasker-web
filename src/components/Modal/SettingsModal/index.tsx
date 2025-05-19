import { useAuthContext } from '@/contexts/authContext'

import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'

import Button from '@/components/Buttons/Button'
import BaseModal from '../BaseModal'
import ProfileTab from './Profile'
import AppearanceTab from './Appearance'

const SettingsModal = () => {
  const { user } = useAuthContext()

  return (
    <BaseModal title="Configurações">
      <div className="flex flex-col justify-between min-w-[638px] h-[652px] mt-2">
        <Tabs.Root className="space-y-9" defaultValue="tab1">
          <Tabs.List className="flex gap-6 px-4" aria-label="Manage your account">
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

            <Tabs.Trigger
              className="
                pt-2 pb-1.5 font-medium font-int leading-tight text-xs dark:text-gray-200 text-white-300 focus:outline-none cursor-pointer select-none
                border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-main-blue
              "
              value="tab3"
            >
              Conta
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="flex flex-col gap-14" value="tab1">
            <ProfileTab name={user.name} email={user.email} />
          </Tabs.Content>

          <Tabs.Content className="flex flex-col gap-14" value="tab2">
            <AppearanceTab />
          </Tabs.Content>
        </Tabs.Root>

        <div className="flex justify-end gap-3 px-6">
          <Dialog.Close asChild>
            <Button
              variant="primary"
              size="md"
              label="Salvar"
              // onClick={}
              // disabled={!username.trim()}
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

export default SettingsModal
