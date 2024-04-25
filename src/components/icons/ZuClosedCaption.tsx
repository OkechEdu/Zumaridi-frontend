import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuClosedCaption = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M17.078.093H1.582C1.24.093.912.227.67.465c-.242.238-.378.56-.378.896v10.145c0 .336.136.659.378.897.242.237.57.371.913.371h15.496c.343 0 .671-.133.913-.371s.378-.56.378-.897V1.361c0-.336-.136-.658-.378-.896a1.303 1.303 0 0 0-.913-.372ZM8.685 4.532H5.456v3.804h3.229v1.268H5.456c-.342 0-.67-.134-.913-.371a1.257 1.257 0 0 1-.378-.897V4.532c0-.337.136-.66.378-.897.242-.238.57-.371.913-.371h3.229v1.268Zm6.456 0h-3.228v3.804h3.228v1.268h-3.228c-.343 0-.671-.134-.913-.371a1.256 1.256 0 0 1-.378-.897V4.532c0-.337.136-.66.378-.897.242-.238.57-.371.913-.371h3.228v1.268Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuClosedCaption.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuClosedCaption;
