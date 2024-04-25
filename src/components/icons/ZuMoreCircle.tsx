import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMoreCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M4.6 7A.8.8 0 1 1 3 7a.8.8 0 0 1 1.6 0Zm3.2 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM11 7a.8.8 0 1 1-1.6 0A.8.8 0 0 1 11 7ZM7 .6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 7 .6ZM1.4 7a5.6 5.6 0 1 1 11.2 0A5.6 5.6 0 0 1 1.4 7Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMoreCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMoreCircle;
