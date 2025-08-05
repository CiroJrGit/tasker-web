import { IconProps } from '@/types/iconProps'

const IconTrash = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 17"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8504 4.81104C14.3629 11.108 14.289 14.4729 13.6502 15.0029C12.8702 15.65 9.27113 15.65 9.27113 15.65C8.58011 15.6499 4.97469 15.65 4.19467 15.0029C3.52774 14.4496 3.63789 11.108 3.15039 4.81104"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6.0752 2.44905V1.44152C6.0752 1.00433 6.5429 0.649902 7.11984 0.649902H10.8806C11.4575 0.649902 11.9252 1.00433 11.9252 1.44152V2.44905"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.8002 3.01172H1.2002" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>

    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 18 17"
    //   className={`shrink-0 ${color}`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M14.8504 4.81104C14.3629 11.108 14.289 14.4729 13.6502 15.0029C12.8702 15.65 9.27113 15.65 9.27113 15.65C8.58011 15.6499 4.97469 15.65 4.19467 15.0029C3.52774 14.4496 3.63789 11.108 3.15039 4.81104"
    //     stroke="currentColor"
    //     strokeWidth="1.3"
    //     strokeLinecap="round"
    //   />
    //   <path d="M6.77148 6.60791L7.04784 12.5608" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    //   <path d="M11.229 6.60791L10.9684 12.5608" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    //   <path
    //     d="M6.0752 2.44905V1.44152C6.0752 1.00433 6.5429 0.649902 7.11984 0.649902H10.8806C11.4575 0.649902 11.9252 1.00433 11.9252 1.44152V2.44905"
    //     stroke="currentColor"
    //     strokeWidth="1.2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path d="M16.8002 3.01172H1.2002" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    // </svg>  TO-DO: remover
  )
}

export default IconTrash
