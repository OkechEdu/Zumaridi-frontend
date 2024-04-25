import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMessageSquareEdit = ({ size, color, className, ...props }: Props) => {
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
        d="M9.666.333H4.333c-2.206 0-4 1.794-4 4V13a.667.667 0 0 0 .667.667h8.666c2.206 0 4-1.794 4-4V4.333c0-2.206-1.794-4-4-4ZM5 10.333H3.666V9.001l3.687-3.682 1.333 1.333-3.687 3.681Zm4.315-4.31L7.982 4.691l1.016-1.016 1.332 1.333-1.016 1.015Z"
        fill="currentColor"
        fillOpacity={0.69}
      />
    </svg>
  );
};
SvgZuMessageSquareEdit.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMessageSquareEdit;
