import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuHyperLink = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M3.625 1.375h-1.25a1 1 0 0 0-1 1v5.25a1 1 0 0 0 1 1h5.25a1 1 0 0 0 1-1v-1.25m0-2.75v-2.25h-2.25M8.5 1.5 4.875 5.125"
        fill="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuHyperLink.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuHyperLink;
