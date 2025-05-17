import { IconProps } from '@/types/iconProps'

const IconPlus = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 1.5V16.5" className={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 9.00006H16" className={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconPlus
