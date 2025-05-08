import { IconProps } from '../../types/iconProps'

const IconEllipsis = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 3"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z" className="dark:fill-gray-300 fill-white-300"></path>
        <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z" className="dark:fill-gray-300 fill-white-300"></path>
        <path
          d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"
          className="dark:fill-gray-300 fill-white-300"
        ></path>
      </g>
    </svg>
  )
}

export default IconEllipsis
