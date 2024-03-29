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
  );
};

export default IconEllipsis;
