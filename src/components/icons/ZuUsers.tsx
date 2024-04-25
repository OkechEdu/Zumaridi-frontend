import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuUsers = ({ size, color, className, ...props }: Props) => {
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
        d="M12.085 4.835a2.104 2.104 0 0 1-1.361 1.352 2.16 2.16 0 0 1-2.504-.899.198.198 0 0 1 0-.202c.29-.517.454-1.115.454-1.753 0-.221-.02-.437-.058-.648a.197.197 0 0 1 .063-.188A2.1 2.1 0 0 1 10.04 2c1.41 0 2.51 1.367 2.044 2.835Zm-1.012 2.352h-1.32c-.113 0-.2.086-.2.2 0 .053.02.106.06.14l.02.02c.934.9 1.367 2.186 1.367 3.466 0 .247-.013.487-.053.707a.345.345 0 0 0-.009.08c0 .114.089.2.195.2h.974c1.22 0 1.893-.667 1.893-1.88 0-1.353-.767-2.933-2.927-2.933ZM5.007.667a2.666 2.666 0 1 0-.002 5.332A2.666 2.666 0 0 0 5.007.667Zm1.326 6.666H3.667C.96 7.333 0 9.313 0 11.013c0 1.52.807 2.32 2.333 2.32h5.334c1.526 0 2.333-.8 2.333-2.32 0-1.7-.96-3.68-3.667-3.68Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuUsers.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuUsers;
