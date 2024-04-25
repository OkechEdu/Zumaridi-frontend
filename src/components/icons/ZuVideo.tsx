import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuVideo = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M27.333 4.08v11.84c0 .843-.974 1.31-1.632.783l-2.885-2.316a.4.4 0 0 1-.15-.313V5.926a.4.4 0 0 1 .15-.312l2.885-2.316a1.004 1.004 0 0 1 1.632.783Zm-6.666 11.253V4.667c0-2.667-1.334-4-4-4h-12c-2.667 0-4 1.333-4 4v10.666c0 2.667 1.333 4 4 4h12c2.666 0 4-1.333 4-4Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuVideo.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuVideo;
