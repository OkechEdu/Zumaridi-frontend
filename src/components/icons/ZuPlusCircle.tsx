import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPlusCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M35 64.167c16.108 0 29.167-13.059 29.167-29.167C64.167 18.892 51.108 5.833 35 5.833 18.892 5.833 5.833 18.892 5.833 35c0 16.108 13.059 29.167 29.167 29.167ZM35 23.333v23.334M23.333 35h23.334"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuPlusCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPlusCircle;
