import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCheckedboxMarkedCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 31"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m13.046 23.322-7.628-7.628 2.15-2.167 5.478 5.477L24.625 7.425l2.15 2.166M16.098.438a15.256 15.256 0 1 0 0 30.511 15.256 15.256 0 0 0 0-30.511Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuCheckedboxMarkedCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCheckedboxMarkedCircle;
