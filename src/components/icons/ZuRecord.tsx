import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuRecord = ({ size, color, className, ...props }: Props) => {
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
        d="M7.157 14.503c-3.895 0-7.064-3.11-7.064-6.932C.093 3.748 3.262.638 7.157.638c3.896 0 7.064 3.11 7.064 6.933 0 3.822-3.168 6.932-7.064 6.932Zm0-12.898c-3.352 0-6.079 2.676-6.079 5.966s2.727 5.965 6.08 5.965c3.351 0 6.078-2.676 6.078-5.965 0-3.29-2.727-5.966-6.079-5.966ZM11.1 7.571c0-2.138-1.765-3.87-3.943-3.87s-3.943 1.732-3.943 3.87c0 2.137 1.765 3.869 3.943 3.869S11.1 9.708 11.1 7.57Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuRecord.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRecord;
