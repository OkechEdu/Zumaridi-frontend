import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuEye = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M11.75 7A2.752 2.752 0 0 1 9 9.75 2.752 2.752 0 0 1 6.25 7c0-.349.072-.68.191-.988.194.154.428.26.695.26.627 0 1.136-.509 1.136-1.136 0-.267-.106-.501-.26-.695.308-.12.639-.191.988-.191A2.752 2.752 0 0 1 11.75 7Zm5.842 1.477C16.365 10.531 13.61 14 9 14S1.635 10.531.408 8.477a2.878 2.878 0 0 1 0-2.954C1.635 3.469 4.391 0 9 0s7.365 3.469 8.592 5.523c.544.91.544 2.044 0 2.954ZM13.25 7A4.255 4.255 0 0 0 9 2.75 4.255 4.255 0 0 0 4.75 7 4.255 4.255 0 0 0 9 11.25 4.255 4.255 0 0 0 13.25 7Z"
        fill="#25314C"
      />
    </svg>
  );
};
SvgZuEye.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuEye;
