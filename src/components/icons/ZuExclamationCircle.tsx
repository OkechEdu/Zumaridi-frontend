import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuExclamationCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M9.5.137C4.744.137.89 3.92.89 8.59c0 4.67 3.855 8.454 8.61 8.454 4.754 0 8.608-3.785 8.608-8.454 0-4.669-3.854-8.453-8.609-8.453Zm-.646 4.65c0-.35.289-.635.645-.635a.64.64 0 0 1 .646.634V8.65a.64.64 0 0 1-.646.634.64.64 0 0 1-.645-.634V4.786Zm.663 7.608a.857.857 0 0 1-.866-.846.85.85 0 0 1 .857-.845h.009c.476 0 .86.378.86.845a.854.854 0 0 1-.86.846Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuExclamationCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuExclamationCircle;
