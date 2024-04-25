import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuBackward = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 31"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M45.337 5.846V25.97c0 4.072-4.655 6.355-7.835 3.843L24.763 19.75a4.87 4.87 0 0 1-1.856-3.796V25.97c0 4.072-4.656 6.355-7.836 3.843L2.333 19.75c-2.475-1.957-2.475-5.732 0-7.689L15.07 2.003c3.18-2.512 7.836-.227 7.836 3.843V15.86a4.87 4.87 0 0 1 1.857-3.798L37.502 2.003c3.182-2.512 7.835-.23 7.835 3.843Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuBackward.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuBackward;
