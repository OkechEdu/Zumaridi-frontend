import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuGridSquare = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M16.968 1.73v3.124c0 1.042-.52 1.563-1.562 1.563H12.28c-1.042 0-1.563-.521-1.563-1.563V1.73c0-1.041.521-1.562 1.563-1.562h3.125c1.042 0 1.562.52 1.562 1.562ZM4.99.166H1.864C.823.167.302.687.302 1.729v3.125c0 1.042.52 1.563 1.562 1.563H4.99c1.042 0 1.563-.521 1.563-1.563V1.73C6.552.688 6.03.167 4.989.167Zm10.417 10.416H12.28c-1.042 0-1.563.521-1.563 1.563v3.125c0 1.042.521 1.562 1.563 1.562h3.125c1.042 0 1.562-.52 1.562-1.562v-3.125c0-1.042-.52-1.563-1.562-1.563Zm-10.417 0H1.864c-1.041 0-1.562.521-1.562 1.563v3.125c0 1.042.52 1.562 1.562 1.562H4.99c1.042 0 1.563-.52 1.563-1.562v-3.125c0-1.042-.521-1.563-1.563-1.563Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuGridSquare.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuGridSquare;
