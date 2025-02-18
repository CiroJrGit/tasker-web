import * as Separator from '@radix-ui/react-separator'
import Button from '../../Button'

interface ProfileProps {
  name?: string
  email?: string
}

const ProfileTab = ({ name, email }: ProfileProps) => {
  // const [username, setUsername] = useState(user.name || '')

  return (
    <>
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
              {/* {user.name?.charAt(0).toUpperCase()} */}
              {name?.charAt(0).toUpperCase()}
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
              // defaultValue={user.name}
              defaultValue={name}
              placeholder="Digite um nome de usuário"
              // onChange={(e) => setUsername(e.target.value)}
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
                {/* {user.email} */}
                {email}
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
    </>
  )
}

export default ProfileTab
