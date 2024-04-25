import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCopy = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.5 4.5 3h8.121L18 8.379V19.5L16.5 21h-12L3 19.5v-15ZM16.5 9 12 4.5H4.5v15h12V9Z"
        fill="currentColor"
        fillOpacity={0.7}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0 0 1.5v15L1.5 18V1.5h9.621L9.621 0H1.5Z"
        fill="currentColor"
        fillOpacity={0.7}
      />
    </svg>
  );
};
SvgZuCopy.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCopy;
