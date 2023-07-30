import { IconProps } from '../../types/iconProps';
import clsx from 'clsx';

const IconCheck = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="20.5"
        height="20.5"
        rx="5.25"
        className={clsx({
          'dark:stroke-gray-400 stroke-white-400': stroke !== 'tasklist',
          'dark:stroke-gray-100 stroke-gray-400': stroke === 'tasklist',
        })}
        strokeWidth="1.5"
      />
      <path
        d="M16 7.5L9.125 14.375L6 11.25"
        className={clsx({
          'dark:stroke-gray-400 stroke-white-400': stroke !== 'tasklist',
          'dark:stroke-gray-100 stroke-gray-400': stroke === 'tasklist',
        })}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCheck;
