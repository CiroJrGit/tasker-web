import { IconProps } from '../../../types/iconProps'

const IconDuplicate = ({ width, height, color }: IconProps) => {
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
        d="M4.5 11.5H2.75C1.7835 11.5 1 10.7165 1 9.75V2.75C1 1.7835 1.7835 1 2.75 1H9.75C10.7165 1 11.5 1.7835 11.5 2.75V4.5M6.25 15H13.25C14.2165 15 15 14.2165 15 13.25V6.25C15 5.2835 14.2165 4.5 13.25 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V13.25C4.5 14.2165 5.2835 15 6.25 15Z"
        className={color}
        stroke="#A5A9B7"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconDuplicate
