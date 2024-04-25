import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLocation = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M8.553.771C4.806.771.93 3.623.93 8.395c0 5.06 7.008 12.127 7.306 12.425a.447.447 0 0 0 .634 0c.299-.299 7.307-7.365 7.307-12.425C16.177 3.623 12.3.77 8.553.77Zm0 10.314a2.693 2.693 0 0 1-2.69-2.69 2.693 2.693 0 0 1 2.69-2.691 2.693 2.693 0 0 1 2.691 2.69 2.693 2.693 0 0 1-2.69 2.691Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLocation.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLocation;
