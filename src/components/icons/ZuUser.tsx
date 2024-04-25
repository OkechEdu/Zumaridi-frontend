import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuUser = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M2.577 3.063c0-1.38 1.142-2.5 2.547-2.5 1.405 0 2.548 1.12 2.548 2.5 0 1.378-1.143 2.5-2.548 2.5s-2.547-1.122-2.547-2.5Zm3.815 3.75H3.845C1.259 6.813.342 8.67.342 10.261c0 1.423.771 2.175 2.23 2.175h5.092c1.46 0 2.231-.752 2.231-2.175 0-1.591-.917-3.45-3.503-3.45Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuUser.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuUser;
