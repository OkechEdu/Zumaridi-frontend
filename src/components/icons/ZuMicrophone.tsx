import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMicrophone = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M9.43 16.712V19c0 .414-.342.75-.764.75a.758.758 0 0 1-.764-.75v-2.288C3.904 16.334.769 13.02.769 9c0-.414.342-.75.764-.75s.764.336.764.75c0 3.446 2.857 6.25 6.369 6.25 3.512 0 6.369-2.804 6.369-6.25 0-.414.342-.75.764-.75s.764.336.764.75c0 4.02-3.135 7.333-7.133 7.712ZM8.666.5C6.138.5 4.08 2.519 4.08 5v4c0 2.481 2.058 4.5 4.586 4.5 2.528 0 4.586-2.019 4.586-4.5V5c0-2.481-2.058-4.5-4.586-4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMicrophone.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMicrophone;
