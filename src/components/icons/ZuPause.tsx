import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPause = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 46"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M.554 41.6V4.215C.554 1.723 1.8.477 4.292.477h4.985c2.492 0 3.738 1.246 3.738 3.738V41.6c0 2.492-1.246 3.738-3.738 3.738H4.292C1.8 45.338.554 44.092.554 41.6Zm26.169 3.738h4.985c2.492 0 3.738-1.246 3.738-3.738V4.215c0-2.492-1.246-3.738-3.738-3.738h-4.985c-2.492 0-3.738 1.246-3.738 3.738V41.6c0 2.492 1.246 3.738 3.738 3.738Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPause.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPause;
