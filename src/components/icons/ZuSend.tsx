import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuSend = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M1.727 23.88 23.25 13.301c.999-.495.999-2.107 0-2.602L1.727.12C.913-.29.012.403.012 1.407L0 7.927c0 .707.456 1.315 1.073 1.4L18.502 12 1.073 14.659C.456 14.758 0 15.366 0 16.073l.012 6.52c0 1.004.9 1.697 1.715 1.287Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuSend.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuSend;
