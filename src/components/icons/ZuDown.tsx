import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuDown = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 4"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M6.883.006H.7a.562.562 0 0 0-.396.96L3.01 3.671a1.112 1.112 0 0 0 1.572 0l1.028-1.029L7.285.966c.35-.355.099-.96-.402-.96Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuDown.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuDown;
