import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCheck = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10.455.455a1.125 1.125 0 0 1 1.607 1.575L6.073 9.515a1.125 1.125 0 0 1-1.62.03L.486 5.576a1.125 1.125 0 1 1 1.59-1.59l3.141 3.14 5.21-6.638a.351.351 0 0 1 .03-.033h-.002Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuCheck.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCheck;
