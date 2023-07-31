import { IconProps } from '../../types/iconProps';

const IconTrash = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2.61346L2.79156 12.1451C2.98077 13.1518 3.80366 13.9805 4.92047 14.2892L5.17593 14.3598C7.01347 14.8677 8.98653 14.8677 10.824 14.3598L11.0795 14.2892C12.1963 13.9805 13.0192 13.1518 13.2085 12.1451L15 2.61346"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.96783C11.866 3.96783 15 3.36151 15 2.61358C15 1.86564 11.866 1.25932 8 1.25932C4.13401 1.25932 1 1.86564 1 2.61358C1 3.36151 4.13401 3.96783 8 3.96783Z"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTrash;
