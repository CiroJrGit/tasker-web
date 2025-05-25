import { MainButtonProps, mainButton } from '@/types/buttonTypes'

const MainButton = ({ label, variant, size, ...props }: MainButtonProps) => {
  return (
    <button {...props} className={mainButton({ variant, size })}>
      {label}
    </button>
  )
}

export default MainButton
