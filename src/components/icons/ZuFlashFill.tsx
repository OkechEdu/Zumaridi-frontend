import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFlashFill = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 68"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M42.515 20.458h-15.57l5.304-18.55A1.458 1.458 0 0 0 30.846.05H10.424a1.46 1.46 0 0 0-1.408 1.075L.264 33.193a1.456 1.456 0 0 0 1.408 1.842h15.757l-5.523 30.35a1.457 1.457 0 0 0 1.435 1.718 1.46 1.46 0 0 0 1.216-.648l29.173-43.73a1.454 1.454 0 0 0 .073-1.496 1.462 1.462 0 0 0-1.288-.771Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuFlashFill.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFlashFill;
