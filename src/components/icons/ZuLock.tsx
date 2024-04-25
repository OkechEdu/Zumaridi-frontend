import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLock = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M4.063 7.438c0-3.375 0-5.625 3.937-5.625 3.938 0 3.938 2.25 3.938 5.625M8 10.25v1.688m-6.188-4.5v8.437h12.376V7.437H1.812Z"
        stroke="#000"
        strokeOpacity={0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.063a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.124Z"
        stroke="#000"
        strokeOpacity={0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuLock.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLock;
