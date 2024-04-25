import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuClock = ({ size, color, className, ...props }: Props) => {
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
        d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 13.333A6.34 6.34 0 0 1 .667 7 6.34 6.34 0 0 1 7 .667 6.34 6.34 0 0 1 13.333 7 6.34 6.34 0 0 1 7 13.333Zm2.236-4.569a.334.334 0 0 1-.472.471l-2-2A.333.333 0 0 1 6.667 7V3.666a.333.333 0 0 1 .666 0v3.195l1.903 1.903Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuClock.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuClock;
