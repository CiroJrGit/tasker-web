import { IconProps } from '@/types/iconProps'

const IconSpinner = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className="animate-spin shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#E3E3E3"
      />
      <path d="M0 10C0 4.47715 4.47715 0 10 0V3C6.13401 3 3 6.13401 3 10H0Z" fill="#E3E3E3" />
    </svg>
  )
}

export default IconSpinner
