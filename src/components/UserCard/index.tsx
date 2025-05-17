import { useAuth } from '@/hooks/useAuth'

interface UserProps {
  variant: string
}

const UserCard = ({ variant }: UserProps) => {
  const { user } = useAuth()

  return (
    <>
      {variant === 'sm' && (
        <div className="flex items-center gap-2">
          <div className="px-2 rounded-md text-xl font-medium dark:text-gray-100 text-gray-300 dark:bg-gray-500 bg-white-600">
            <span className="duration-40">{user.name?.charAt(0).toUpperCase()}</span>
          </div>

          <div className="flex flex-col">
            <span className="block max-w-[175px] pt-0.5 text-base font-medium dark:text-gray-50 text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </span>
          </div>
        </div>
      )}

      {variant === 'md' && (
        <div className="flex flex-row gap-3">
          <div
            className="
              flex justify-center items-center w-11 h-10.5 rounded-lg text-2.5xl font-medium dark:text-gray-100 text-gray-300 border dark:border-gray-500 border-white-500/40 dark:bg-gray-500 bg-white-600
              dark:group-hover:bg-gray-500 dark:group-hover:border-gray-500 group-hover:bg-white-500 group-hover:border-white-400/10
            "
          >
            <span className="duration-40">{user.name?.charAt(0).toUpperCase()}</span>
          </div>

          <div className="flex justify-center flex-col">
            <span className="text-base font-medium dark:text-gray-50 text-gray-500 text-start whitespace-nowrap overflow-hidden text-ellipsistext-start">
              {user.name}
            </span>

            <span className="font-int font-medium text-2xs dark:text-gray-300 text-white-300 text-start">
              {user.email}
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default UserCard
