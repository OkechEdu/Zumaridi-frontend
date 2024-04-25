import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuArrowUp = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 26"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.634 11.384a1.247 1.247 0 0 1-1.768 0L11.25 4.768V24.25a1.25 1.25 0 1 1-2.5 0V4.768l-6.616 6.616A1.249 1.249 0 1 1 .366 9.616L9.115.868a1.25 1.25 0 0 1 1.77 0l8.749 8.748a1.249 1.249 0 0 1 0 1.768Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuArrowUp.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuArrowUp;
