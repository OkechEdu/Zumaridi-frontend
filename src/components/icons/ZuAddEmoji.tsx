import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuAddEmoji = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10.66 0A10.678 10.678 0 0 1 20.73 7.135c.486 1.385.681 2.854.573 4.317a7.292 7.292 0 0 0-1.31-.51 9.33 9.33 0 0 0-5.634-8.846 9.343 9.343 0 0 0-10.304 1.97 9.332 9.332 0 0 0 6.88 15.929c.128.457.298.895.51 1.31a10.679 10.679 0 0 1-10.437-6.11A10.663 10.663 0 0 1 6.49.854 10.677 10.677 0 0 1 10.659 0Z"
        fill="currentColor"
      />
      <path
        d="M6.864 13.9a5.341 5.341 0 0 0 4.246 1.56 7.277 7.277 0 0 0-.356 1.353 6.668 6.668 0 0 1-4.838-1.972.667.667 0 1 1 .948-.94ZM13.994 7.333a1.334 1.334 0 1 1 0 2.668 1.334 1.334 0 0 1 0-2.668ZM7.324 7.333a1.334 1.334 0 1 1 0 2.669 1.334 1.334 0 0 1 0-2.67ZM24 18a5.999 5.999 0 0 1-6.003 6 6.005 6.005 0 0 1-6.003-6 5.998 5.998 0 0 1 6.003-6 6.005 6.005 0 0 1 6.004 6Zm-5.335-2.667a.666.666 0 0 0-1.335 0v2h-2a.667.667 0 0 0 0 1.333h2v2a.666.666 0 0 0 1.335 0v-2h2a.667.667 0 0 0 0-1.333h-2v-2Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuAddEmoji.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuAddEmoji;
