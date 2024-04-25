import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuVideoSlash = ({ size, color, className, ...props }: Props) => {
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
        d="M17.334 5.3v7.4c0 .527-.61.818-1.02.49l-1.804-1.448a.25.25 0 0 1-.093-.195V7.02a.25.25 0 0 1 .073-.177l2.083-2.082a.285.285 0 0 1 .255-.075.62.62 0 0 1 .506.614Zm-4.575 3.275-5.85 5.85c-.16.19.005.408.183.408h3.575c1.667 0 2.5-.833 2.5-2.5V8.778a.244.244 0 0 0-.409-.203Zm4.183-7.517a.625.625 0 0 0-.884 0l-3.195 3.195c-.373-.719-1.101-1.086-2.197-1.086h-7.5c-1.667 0-2.5.833-2.5 2.5v6.666c0 1.372.574 2.17 1.703 2.413l-1.312 1.312a.625.625 0 0 0 .883.884l15-15a.624.624 0 0 0 .002-.884Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuVideoSlash.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuVideoSlash;
