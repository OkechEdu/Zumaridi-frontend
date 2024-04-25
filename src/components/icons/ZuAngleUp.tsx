import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuAngleUp = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 7"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M9.354 6.148A.471.471 0 0 1 9 6.312a.475.475 0 0 1-.354-.164L5 2.046 1.354 6.148a.462.462 0 0 1-.707 0 .614.614 0 0 1 0-.795l4-4.5a.462.462 0 0 1 .707 0l4 4.5a.614.614 0 0 1 0 .795Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuAngleUp.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuAngleUp;
