import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuTrash = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M17.75 3a.75.75 0 0 1-.75.75H1a.75.75 0 0 1 0-1.5h4.214a4.53 4.53 0 0 0 .242-.618l.202-.607A1.5 1.5 0 0 1 7.081 0h3.838a1.5 1.5 0 0 1 1.423 1.025l.202.607c.077.23.149.436.242.618H17a.75.75 0 0 1 .75.75Zm-2.19 1.75a.3.3 0 0 1 .299.32L15.19 15.2c-.11 1.58-.94 2.8-3 2.8H5.81c-2.06 0-2.89-1.22-3-2.8L2.141 5.07a.3.3 0 0 1 .299-.32h13.12ZM7.75 8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75V8Zm4 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75V8Z"
        fill="red"
      />
    </svg>
  );
};
SvgZuTrash.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuTrash;
