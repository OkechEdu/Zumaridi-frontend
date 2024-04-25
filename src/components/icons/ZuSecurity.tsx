import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuSecurity = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M6 .667 0 3.333v4c0 3.7 2.56 7.16 6 8 3.44-.84 6-4.3 6-8v-4L6 .667Zm0 7.326h4.667C10.313 10.74 8.48 13.187 6 13.953V8H1.333V4.2L6 2.127v5.866Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuSecurity.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuSecurity;
