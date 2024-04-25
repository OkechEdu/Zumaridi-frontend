import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMoreHorizontal = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 4"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M2.02 4A2.005 2.005 0 0 1 .015 2c0-1.104.89-2 1.995-2h.01a2 2 0 0 1 0 4Zm10-2a2 2 0 0 0-2-2h-.01a1.996 1.996 0 0 0-1.995 2c0 1.104.9 2 2.005 2a2 2 0 0 0 2-2Zm8 0a2 2 0 0 0-2-2h-.01a1.996 1.996 0 0 0-1.995 2c0 1.104.9 2 2.005 2a2 2 0 0 0 2-2Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMoreHorizontal.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMoreHorizontal;
