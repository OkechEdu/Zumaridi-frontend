import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuWifi = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M15.143 1.286a21.43 21.43 0 0 1 0 21.428M10.429 3.643a16.714 16.714 0 0 1 0 16.714m-4.5-14.55a12.314 12.314 0 0 1 1.619 6.107c0 2.144-.559 4.25-1.62 6.107m-4.5-9.878A6.99 6.99 0 0 1 2.599 12a6.99 6.99 0 0 1-1.17 3.857"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};
SvgZuWifi.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuWifi;
