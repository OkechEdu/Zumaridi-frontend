import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuVisa = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 11"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.357 10.678H5.692L3.693 2.59c-.095-.372-.296-.701-.593-.856-.739-.39-1.554-.7-2.443-.856V.567h4.294c.593 0 1.037.467 1.111 1.01L7.1 7.413 9.764.567h2.591l-3.998 10.11Zm5.48 0h-2.518L13.392.567h2.518l-2.073 10.11Zm5.33-7.31c.074-.545.518-.856 1.037-.856a4.458 4.458 0 0 1 2.443.466l.444-2.177a6.054 6.054 0 0 0-2.295-.468c-2.443 0-4.22 1.4-4.22 3.345 0 1.478 1.258 2.255 2.147 2.723.962.466 1.332.777 1.258 1.244 0 .7-.74 1.01-1.48 1.01-.889 0-1.778-.232-2.591-.622l-.445 2.178c.89.389 1.85.545 2.74.545 2.74.077 4.442-1.322 4.442-3.423 0-2.644-3.48-2.8-3.48-3.965Zm12.29 7.31L29.458.567h-2.147a1.12 1.12 0 0 0-1.037.777l-3.701 9.334h2.591l.518-1.478h3.184l.296 1.478h2.295Zm-3.775-7.389.74 3.811h-2.074l1.334-3.81Z"
        fill="#172B85"
      />
    </svg>
  );
};
SvgZuVisa.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuVisa;
