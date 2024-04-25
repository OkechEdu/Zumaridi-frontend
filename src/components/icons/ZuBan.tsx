import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuBan = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M11.977.982C5.924.982.998 5.831.998 11.79c0 5.96 4.926 10.807 10.98 10.807 6.053 0 10.978-4.848 10.978-10.806 0-5.96-4.925-10.808-10.979-10.808ZM2.994 11.79c0-4.874 4.03-8.842 8.983-8.842a9.02 9.02 0 0 1 5.6 1.94L4.967 17.303a8.706 8.706 0 0 1-1.972-5.512Zm8.983 8.843a9.02 9.02 0 0 1-5.6-1.94L18.989 6.276a8.71 8.71 0 0 1 1.971 5.513c0 4.874-4.03 8.842-8.983 8.842Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuBan.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuBan;
