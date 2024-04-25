import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuBills = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.497 7.667V9a.667.667 0 0 0 .667.667h10A.667.667 0 0 0 13.83 9V3.667A.667.667 0 0 0 13.164 3h-.83v1.223a.997.997 0 0 0 .83.442V8a1 1 0 0 0-.995 1H4.162a1 1 0 0 0-.999-.987v-.346h-.666Z"
        fill="currentColor"
      />
      <path
        d="M7.334 3.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 .333A.667.667 0 0 0 .333 1v5.333A.667.667 0 0 0 1 7h10a.667.667 0 0 0 .667-.667V1A.667.667 0 0 0 11 .333H1ZM2 1h8a1 1 0 0 0 1 .999v3.334a1 1 0 0 0-.994 1H1.999A1 1 0 0 0 1 5.346V2a1 1 0 0 0 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuBills.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuBills;
