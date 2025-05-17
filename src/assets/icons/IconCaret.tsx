import { IconProps } from '@/types/iconProps'

const IconCaret = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 7"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.625L5.5 5.375L10 1.625"
        className={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconCaret
