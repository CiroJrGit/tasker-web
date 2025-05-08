import { IconProps } from '../../types/iconProps'

const IconLogout = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.125 14.5H2.75C2.28587 14.5 1.84075 14.3288 1.51256 14.024C1.18437 13.7193 1 13.306 1 12.875V3.125C1 2.69402 1.18437 2.2807 1.51256 1.97595C1.84075 1.6712 2.28587 1.5 2.75 1.5H7.125M15 8L11.5 4.75M15 8L11.5 11.25M15 8H6.25"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconLogout
