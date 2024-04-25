import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuMinus = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 2"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path d="M15 2H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z" fill="#48484A" />
    </svg>
  );
};
SvgZuMinus.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMinus;
