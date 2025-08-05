import { IconProps } from '@/types/iconProps'

const IconLink = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1279 5.87207L5.87189 11.1281"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.6738L7.8019 14.3719C6.35051 15.8232 4.24465 16.0706 2.58692 14.4129C1 12.826 1.1766 10.6493 2.62798 9.19795L4.32593 7.50049"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6738 9.5L14.372 7.80185C15.8234 6.35043 16.0755 4.2493 14.413 2.58687C12.7506 0.924448 10.6495 1.17652 9.19807 2.62793L7.5 4.326"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconLink
