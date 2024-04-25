import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFiles = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.893 4.333H8.258c-.667-.033-1.977-1.41-2.73-1.41h-3.3a.727.727 0 0 0-.727.744v2.43h13v-1.14a.609.609 0 0 0-.607-.624v0Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6.093h-13v6.24a.727.727 0 0 0 .723.734h11.55a.727.727 0 0 0 .727-.734v0-6.24Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuFiles.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFiles;
