import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMessageExclamation = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.665.404H3.335C1.613.404.752 1.249.752 2.94v12.68l2.583-2.536h10.33c1.722 0 2.583-.845 2.583-2.536V2.94c0-1.691-.861-2.536-2.583-2.536Zm-5.81 3.804c0-.35.288-.634.645-.634a.64.64 0 0 1 .646.634v2.536a.64.64 0 0 1-.646.634.64.64 0 0 1-.646-.634V4.208Zm.662 5.918a.857.857 0 0 1-.865-.846.85.85 0 0 1 .856-.845h.01c.475 0 .86.378.86.845a.854.854 0 0 1-.86.846Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMessageExclamation.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMessageExclamation;
