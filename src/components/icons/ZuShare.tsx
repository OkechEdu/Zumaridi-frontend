import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuShare = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M16 12.5c-1.35 0-2.51.776-3.094 1.899L7.14 11.516c.223-.46.36-.97.36-1.516a3.45 3.45 0 0 0-.36-1.516l5.766-2.883C13.49 6.724 14.65 7.5 16 7.5c1.93 0 3.5-1.57 3.5-3.5S17.93.5 16 .5 12.5 2.07 12.5 4c0 .224.026.441.066.653L6.575 7.649A3.478 3.478 0 0 0 4 6.5C2.07 6.5.5 8.07.5 10s1.57 3.5 3.5 3.5a3.48 3.48 0 0 0 2.575-1.149l5.99 2.996A3.51 3.51 0 0 0 12.5 16c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5Zm0-11c1.379 0 2.5 1.122 2.5 2.5S17.379 6.5 16 6.5A2.503 2.503 0 0 1 13.5 4c0-1.378 1.121-2.5 2.5-2.5Zm-12 11A2.503 2.503 0 0 1 1.5 10c0-1.378 1.121-2.5 2.5-2.5S6.5 8.622 6.5 10 5.379 12.5 4 12.5Zm12 6a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuShare.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuShare;
