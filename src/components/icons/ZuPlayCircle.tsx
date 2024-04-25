import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPlayCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm3.46 11.061-4.478 2.74c-.89.545-2.037-.094-2.037-1.137V7.336c0-1.043 1.146-1.682 2.037-1.137l4.478 2.74a1.243 1.243 0 0 1 0 2.122Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPlayCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPlayCircle;
