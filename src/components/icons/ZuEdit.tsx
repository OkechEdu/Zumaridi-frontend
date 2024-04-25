import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuEdit = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m10.355 3.056 1.589 1.588m-.567-2.987L7.082 5.952a1.589 1.589 0 0 0-.435.812L6.25 8.75l1.986-.398c.307-.061.59-.212.811-.434l4.296-4.295a1.392 1.392 0 0 0-.451-2.267 1.39 1.39 0 0 0-1.515.301v0Z"
        fill="currentColor"
        strokeOpacity={0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 10.25v2.25a1.5 1.5 0 0 1-1.5 1.5H2.5A1.5 1.5 0 0 1 1 12.5V4.25a1.5 1.5 0 0 1 1.5-1.5h2.25"
        fill="currentColor"
        strokeOpacity={0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuEdit.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuEdit;
