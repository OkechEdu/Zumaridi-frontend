import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuSparkle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m16.365 8.316-2.347-.658c-2.16-.606-3.818-2.234-4.435-4.355L8.913.998c-.106-.363-.723-.363-.829 0l-.67 2.305c-.617 2.121-2.275 3.75-4.435 4.355l-2.347.658a.424.424 0 0 0-.313.407c0 .188.128.354.313.406l2.347.66c2.16.605 3.818 2.233 4.435 4.354l.67 2.305a.43.43 0 0 0 .415.307.43.43 0 0 0 .414-.307l.67-2.305c.617-2.121 2.276-3.75 4.435-4.355l2.347-.659a.424.424 0 0 0 .313-.406.425.425 0 0 0-.313-.407Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuSparkle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuSparkle;
