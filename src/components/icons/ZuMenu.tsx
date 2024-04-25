import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMenu = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 6"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M.514 1.012c0-.207.168-.375.375-.375h13.5a.375.375 0 0 1 0 .75H.889a.375.375 0 0 1-.375-.375Zm13.875 4.125H.889a.375.375 0 0 0 0 .75h13.5a.375.375 0 0 0 0-.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMenu.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMenu;
