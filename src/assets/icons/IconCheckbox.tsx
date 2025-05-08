import { IconProps } from '../../types/iconProps'

const IconCheckbox = ({ width, height, color, radius = '5.25' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.75" y="0.75" width="20.5" height="20.5" rx={radius} className={color} strokeWidth="1.5" />
      <path
        d="M16 7.5L9.125 14.375L6 11.25"
        className={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconCheckbox
