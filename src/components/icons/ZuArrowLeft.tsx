import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuArrowLeft = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.5 8a.5.5 0 0 1-.5.5H2.207l6.146 6.146a.5.5 0 0 1-.708.707l-7-7a.5.5 0 0 1-.108-.545.489.489 0 0 1 .108-.163l7-7a.5.5 0 0 1 .707.707L2.206 7.498H19c.276.002.5.226.5.502Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuArrowLeft.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuArrowLeft;
