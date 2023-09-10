import { IconProps } from '../../types/iconProps';

const IconEditPen = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.10758 2.99517L1.92186 10.601C1.65054 10.8898 1.38797 11.4587 1.33545 11.8526L1.01161 14.6884C0.897833 15.7124 1.63303 16.4126 2.64831 16.2375L5.46657 15.7561C5.86042 15.6861 6.41185 15.3973 6.68317 15.0997L13.8689 7.49388C15.1117 6.18103 15.6719 4.68437 13.7376 2.85513C11.8121 1.04339 10.3504 1.68231 9.10758 2.99517Z"
        className="dark:stroke-gray-300 stroke--white-400"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9082 4.26424C8.28455 6.67989 10.2451 8.52664 12.6782 8.77166"
        className="dark:stroke-gray-300 stroke--white-400"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEditPen;
