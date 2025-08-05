import { IconProps } from '@/types/iconProps'

const IconNote = ({ width, height, color }: IconProps) => {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 22 24"
    //   className={`shrink-0 ${color}`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M21.3 9.84667V15.23C21.3 20.8335 19.5 22.7667 14.16 22.7667H8.04002C2.74392 22.7667 0.900024 21 0.900024 15.23V8.77C0.900024 3 2.74392 1.23334 8.04002 1.23334H13.14"
    //     stroke="currentColor"
    //     strokeWidth="1.4"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M21.3 9.84667H17.22C14.16 9.84667 13.14 8.77 13.14 5.54V1.23334L21.3 9.84667Z"
    //     stroke="currentColor"
    //     strokeWidth="1.4"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path d="M6 13.0766H12.12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    //   <path d="M6 17.3832H10.08" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    // </svg> TO-DO: remover

    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99941 0.600098H4.61089C3.78583 0.600098 2.99461 0.946598 2.4112 1.56339C1.8278 2.18018 1.5 3.01672 1.5 3.88899V12.1112C1.5 12.9835 1.8278 13.82 2.4112 14.4368C2.99461 15.0536 3.78583 15.4001 4.61089 15.4001H8.5H12.5C13.0525 15.4001 14.0761 14.8627 14.5 14.4368C15.0997 13.8343 15.4996 13.171 15.499 12.1112L15.5 6.5201"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 6.5201H15H12.5C10.5 6.5201 10 5.53343 10 3.06676V1.58676V0.600098L15.5 6.5201Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.7998 8.98682H9.06296"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.7998 11.9468H7.64191"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconNote
