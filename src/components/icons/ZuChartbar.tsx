import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuChartbar = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M6.865 12.125H6.23c-.634 0-.95-.313-.95-.938V1.813c0-.625.316-.938.95-.938h.634c.633 0 .95.313.95.938v9.374c0 .626-.317.938-.95.938Zm5.385-.938v-6.25c0-.625-.317-.937-.95-.937h-.634c-.634 0-.95.313-.95.938v6.25c0 .624.316.937.95.937h.633c.634 0 .95-.313.95-.938Zm-8.87 0v-3.75c0-.625-.317-.937-.95-.937h-.634c-.634 0-.95.313-.95.938v3.75c0 .624.316.937.95.937h.634c.633 0 .95-.313.95-.938Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuChartbar.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuChartbar;
