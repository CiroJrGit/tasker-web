import { IconProps } from '@/types/iconProps'

const IconBack = ({ width, height, color }: IconProps) => {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 15 14"
    //   className={`shrink-0 ${color}`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M4.61111 1.22223L1 4.83334L4.61111 8.44445"
    //     stroke="currentColor"
    //     strokeWidth="1.7"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M1 4.83334H6.77778C10.7665 4.83334 14 8.06688 14 12.0556V12.7778"
    //     stroke="currentColor"
    //     strokeWidth="1.7"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg> TO-DO: remover

    // <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 12"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.18848 0.972168L1.0022 4.16296L4.18998 7.35074"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47561 11.0054L9.8014 11.0282C12.0145 11.0052 13.0001 9.56614 13.0001 7.43969C13.0001 5.31324 11.66 4.13617 9.73807 4.15301H5.54389L2.28174 4.15301"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBack
