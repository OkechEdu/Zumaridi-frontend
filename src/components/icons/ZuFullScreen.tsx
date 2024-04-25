import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFullScreen = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M1.752 5.774V1.97h3.874m11.622 3.804V1.97h-3.874M5.626 17.187H1.752v-3.805m11.622 3.805h3.874v-3.805"
        fill="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuFullScreen.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFullScreen;
