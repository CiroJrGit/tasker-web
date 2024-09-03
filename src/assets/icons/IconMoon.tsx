import { IconProps } from '../../types/iconProps';

const IconMoon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7151 10.7711C15.8851 10.3656 15.3994 10.021 14.9914 10.2009C14.1787 10.558 13.298 10.7419 12.4073 10.7407C8.91982 10.7407 6.09295 7.97066 6.09295 4.55345C6.09295 3.35743 6.43928 2.24088 7.03866 1.29472C7.27474 0.922064 6.99057 0.404723 6.55778 0.515139C3.21601 1.36754 0.75 4.34404 0.75 7.88499C0.75 12.0908 4.22924 15.5 8.52157 15.5C11.7711 15.5 14.5547 13.5458 15.7151 10.7711Z"
        className={color}
      />
    </svg>
  );
};

export default IconMoon;
