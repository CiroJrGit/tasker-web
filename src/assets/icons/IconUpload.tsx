import { IconProps } from '../../types/iconProps'

const IconUpload = ({ width, height, color, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 8.875L14 13.25C14 13.7141 13.8288 14.1592 13.524 14.4874C13.2193 14.8156 12.806 15 12.375 15L2.625 15C2.19402 15 1.7807 14.8156 1.47595 14.4874C1.1712 14.1592 1 13.7141 1 13.25L1 8.875M7.5 1L4.25 4.5M7.5 1L10.75 4.5M7.5 1L7.5 9.75"
        className={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconUpload
