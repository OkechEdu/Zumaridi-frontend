import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuAngleLeft = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M9.8627 2.225L8.37936 0.75L0.137695 9L8.3877 17.25L9.8627 15.775L3.0877 9L9.8627 2.225Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuAngleLeft.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuAngleLeft;
