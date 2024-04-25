import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPhoneHangup = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m27.895 12.788-.004.007c-.47.7-1.333 1.013-2.159.81l-3.932-.99c-1.405-.354-2.28-1.725-1.992-3.119l.36-1.74A16.782 16.782 0 0 0 8.82 7.748l.35 1.754c.277 1.392-.602 2.756-2.006 3.104l-3.957.983a2.018 2.018 0 0 1-2.15-.802C-.882 9.928.017 5.539 3.066 3.852a23.532 23.532 0 0 1 22.796.018c3.036 1.686 3.968 6.07 2.034 8.918Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPhoneHangup.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPhoneHangup;
