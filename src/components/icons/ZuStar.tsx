import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuStar = ({ size, color, className, ...props }: Props) => {
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
        d="M6.35.858 4.734 4.162l-3.652.522c-.646.1-.895.894-.423 1.366L3.27 8.61l-.621 3.601c-.1.646.596 1.143 1.167.845l3.255-1.714 3.23 1.714c.57.298 1.266-.199 1.167-.845l-.621-3.602 2.608-2.559c.473-.472.224-1.267-.422-1.366l-3.627-.522L7.765.858C7.492.287 6.647.262 6.35.858Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuStar.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuStar;
