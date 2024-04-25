import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMessage = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M.375 26.625V4.75C.375 1.833 1.833.375 4.75.375h17.5c2.917 0 4.375 1.458 4.375 4.375v13.125c0 2.917-1.458 4.375-4.375 4.375H4.75L.375 26.625Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMessage.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMessage;
