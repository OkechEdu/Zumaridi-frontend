import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuUserProfile = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5 14H9v-2.5A2.5 2.5 0 0 0 6.5 9h-3A2.5 2.5 0 0 0 1 11.5V14H0v-2.5A3.5 3.5 0 0 1 3.5 8h3a3.5 3.5 0 0 1 3.5 3.5V14Zm0-13h5v1h-5V1Zm0 2.5h5v1h-5v-1ZM10 6h3.5v1H10V6Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuUserProfile.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuUserProfile;
