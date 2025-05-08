import { IconProps } from '../../types/iconProps'

const IconNote = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3 9.84667V15.23C21.3 20.8335 19.5 22.7667 14.16 22.7667H8.04002C2.74392 22.7667 0.900024 21 0.900024 15.23V8.77C0.900024 3 2.74392 1.23334 8.04002 1.23334H13.14"
        className={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3 9.84667H17.22C14.16 9.84667 13.14 8.77 13.14 5.54V1.23334L21.3 9.84667Z"
        className={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 13.0766H12.12" className={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 17.3832H10.08" className={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default IconNote
