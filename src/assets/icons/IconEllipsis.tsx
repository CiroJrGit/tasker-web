import { IconProps } from '../../types/iconProps';

const IconEllipsis = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17.8125C16.5533 17.8125 17.8125 16.5533 17.8125 15C17.8125 13.4467 16.5533 12.1875 15 12.1875C13.4467 12.1875 12.1875 13.4467 12.1875 15C12.1875 16.5533 13.4467 17.8125 15 17.8125Z"
        className="dark:fill-gray-300 fill-white-300"
      />
      <path
        d="M24.375 17.8125C25.9283 17.8125 27.1875 16.5533 27.1875 15C27.1875 13.4467 25.9283 12.1875 24.375 12.1875C22.8217 12.1875 21.5625 13.4467 21.5625 15C21.5625 16.5533 22.8217 17.8125 24.375 17.8125Z"
        className="dark:fill-gray-300 fill-white-300"
      />
      <path
        d="M5.625 17.8125C7.1783 17.8125 8.4375 16.5533 8.4375 15C8.4375 13.4467 7.1783 12.1875 5.625 12.1875C4.0717 12.1875 2.8125 13.4467 2.8125 15C2.8125 16.5533 4.0717 17.8125 5.625 17.8125Z"
        className="dark:fill-gray-300 fill-white-300"
      />
    </svg>

    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 30 30"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M9 15C9 13.3455 7.6545 12 6 12C4.3455 12 3 13.3455 3 15C3 16.6545 4.3455 18 6 18C7.6545 18 9 16.6545 9 15ZM12 15C12 16.6545 13.3455 18 15 18C16.6545 18 18 16.6545 18 15C18 13.3455 16.6545 12 15 12C13.3455 12 12 13.3455 12 15ZM21 15C21 16.6545 22.3455 18 24 18C25.6545 18 27 16.6545 27 15C27 13.3455 25.6545 12 24 12C22.3455 12 21 13.3455 21 15Z"
    //     className="dark:fill-gray-300 fill-white-300"
    //   />
    // </svg>

    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 36 36"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M10.5 18C10.5 19.656 9.156 21 7.5 21C5.844 21 4.5 19.656 4.5 18C4.5 16.344 5.844 15 7.5 15C9.156 15 10.5 16.344 10.5 18ZM28.5 15C26.844 15 25.5 16.344 25.5 18C25.5 19.656 26.844 21 28.5 21C30.156 21 31.5 19.656 31.5 18C31.5 16.344 30.156 15 28.5 15ZM18 15C16.344 15 15 16.344 15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15Z"
    //     className="dark:fill-gray-300 fill-white-300"
    //   />
    // </svg>

    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 56 56"
    //   className="dark:fill-gray-300 fill-white-300"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M15.3202 28C15.3202 25.3984 13.2343 23.3125 10.5859 23.3125C7.98434 23.3125 5.89844 25.3984 5.89844 28C5.89844 30.6016 7.98434 32.6875 10.5859 32.6875C13.2343 32.6875 15.3202 30.6016 15.3202 28ZM32.664 28C32.664 25.3984 30.6015 23.3125 27.9999 23.3125C25.3983 23.3125 23.3359 25.3984 23.3359 28C23.3359 30.6016 25.3983 32.6875 27.9999 32.6875C30.6015 32.6875 32.664 30.6016 32.664 28ZM50.1014 28C50.1014 25.3984 47.9921 23.3125 45.414 23.3125C42.7656 23.3125 40.6796 25.3984 40.6796 28C40.6796 30.6016 42.7656 32.6875 45.414 32.6875C47.9921 32.6875 50.1014 30.6016 50.1014 28Z"
    //     fill="#686C74"
    //   />
    // </svg>

    // <svg
    //   width="26"
    //   height="26"
    //   viewBox="0 0 26 6"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"
    //     className="dark:fill-gray-300 fill-white-300 dark:stroke-gray-300 stroke-white-300"
    //     strokeWidth={width}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1C11.8954 1 11 1.89543 11 3C11 4.10457 11.8954 5 13 5Z"
    //     className="dark:fill-gray-300 fill-white-300 dark:stroke-gray-300 stroke-white-300"
    //     strokeWidth={width}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M23 5C24.1046 5 25 4.10457 25 3C25 1.89543 24.1046 1 23 1C21.8954 1 21 1.89543 21 3C21 4.10457 21.8954 5 23 5Z"
    //     className="dark:fill-gray-300 fill-white-300 dark:stroke-gray-300 stroke-white-300"
    //     strokeWidth={height}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
  );
};

export default IconEllipsis;
