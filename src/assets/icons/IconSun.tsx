import { IconProps } from '../../types/iconProps';

const IconSun = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 0.5C9.67678 0.5 10.0227 0.845965 10.0227 1.27273V2.04545C10.0227 2.47222 9.67678 2.81818 9.25 2.81818C8.82322 2.81818 8.47727 2.47222 8.47727 2.04545V1.27273C8.47727 0.845965 8.82322 0.5 9.25 0.5ZM2.52178 2.27178C2.82355 1.97001 3.31281 1.97001 3.61458 2.27178L4.38731 3.04451C4.68908 3.34628 4.68908 3.83554 4.38731 4.13731C4.08554 4.43908 3.59628 4.43908 3.29451 4.13731L2.52178 3.36458C2.22001 3.06281 2.22001 2.57355 2.52178 2.27178ZM15.9782 2.27178C16.28 2.57355 16.28 3.06281 15.9782 3.36458L15.2055 4.13731C14.9037 4.43908 14.4144 4.43908 14.1127 4.13731C13.8109 3.83554 13.8109 3.34628 14.1127 3.04451L14.8854 2.27178C15.1872 1.97001 15.6765 1.97001 15.9782 2.27178ZM9.25 5.13636C7.11618 5.13636 5.38636 6.86618 5.38636 9C5.38636 11.1338 7.11618 12.8636 9.25 12.8636C11.3838 12.8636 13.1136 11.1338 13.1136 9C13.1136 6.86618 11.3838 5.13636 9.25 5.13636ZM0.75 9C0.75 8.57322 1.09597 8.22727 1.52273 8.22727H2.29545C2.72222 8.22727 3.06818 8.57322 3.06818 9C3.06818 9.42678 2.72222 9.77273 2.29545 9.77273H1.52273C1.09597 9.77273 0.75 9.42678 0.75 9ZM15.4318 9C15.4318 8.57322 15.7778 8.22727 16.2045 8.22727H16.9773C17.404 8.22727 17.75 8.57322 17.75 9C17.75 9.42678 17.404 9.77273 16.9773 9.77273H16.2045C15.7778 9.77273 15.4318 9.42678 15.4318 9ZM3.29451 13.8627C3.59628 13.5609 4.08554 13.5609 4.38731 13.8627C4.68908 14.1644 4.68908 14.6537 4.38731 14.9555L3.61458 15.7282C3.31281 16.03 2.82355 16.03 2.52178 15.7282C2.22001 15.4265 2.22001 14.9372 2.52178 14.6354L3.29451 13.8627ZM14.8854 15.7282L14.1127 14.9555C13.8109 14.6537 13.8109 14.1644 14.1127 13.8627C14.4144 13.5609 14.9037 13.5609 15.2055 13.8627L15.9782 14.6354C16.28 14.9372 16.28 15.4265 15.9782 15.7282C15.6765 16.03 15.1872 16.03 14.8854 15.7282ZM9.25 15.1818C9.67678 15.1818 10.0227 15.5278 10.0227 15.9545V16.7273C10.0227 17.154 9.67678 17.5 9.25 17.5C8.82322 17.5 8.47727 17.154 8.47727 16.7273V15.9545C8.47727 15.5278 8.82322 15.1818 9.25 15.1818Z"
        className={color}
      />
      <path
        d="M9.25013 4.36365C6.68954 4.36365 4.61377 6.43942 4.61377 9.00001C4.61377 11.5606 6.68954 13.6364 9.25013 13.6364C11.8107 13.6364 13.8865 11.5606 13.8865 9.00001C13.8865 6.43942 11.8107 4.36365 9.25013 4.36365Z"
        className={color}
      />
    </svg>
  );
};

export default IconSun;