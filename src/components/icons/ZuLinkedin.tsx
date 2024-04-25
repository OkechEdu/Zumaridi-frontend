import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLinkedin = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M14.377 14.43h.003V9.195c0-2.561-.542-4.534-3.484-4.534-1.415 0-2.364.79-2.752 1.539h-.04V4.9h-2.79v9.53h2.905V9.711c0-1.242.231-2.444 1.743-2.444 1.49 0 1.512 1.418 1.512 2.524v4.64h2.902ZM.583 4.9h2.909v9.53H.583V4.9ZM2.035.156C1.105.156.351.924.351 1.87c0 .947.754 1.73 1.684 1.73.93 0 1.685-.783 1.685-1.73C3.72.924 2.965.156 2.035.156Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLinkedin.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLinkedin;
