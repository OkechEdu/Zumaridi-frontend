import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuForward = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 31"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M43.667 19.751 30.929 29.813c-3.18 2.512-7.836.229-7.836-3.843V15.908a4.866 4.866 0 0 1-1.857 3.843L8.498 29.813c-3.18 2.512-7.836.229-7.836-3.843V5.846c0-4.072 4.653-6.355 7.836-3.843l12.738 10.06a4.866 4.866 0 0 1 1.857 3.842V5.846c0-4.072 4.653-6.355 7.836-3.843l12.738 10.06c2.475 1.956 2.475 5.731 0 7.688Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuForward.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuForward;
