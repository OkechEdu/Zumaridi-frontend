import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuClose = ({ size, color, className, ...props }: Props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.657 7.071 0 1.414 1.414 0l5.657 5.657L12.728 0l1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414-5.657-5.657-5.657 5.657L0 12.728l5.657-5.657Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuClose.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuClose;
