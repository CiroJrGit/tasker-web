import { IconProps } from '@/types/iconProps'

const IconPlusRounded = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 4.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 8.5L12 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="0.6" y="1.1" width="14.8" height="14.8" rx="4.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default IconPlusRounded
