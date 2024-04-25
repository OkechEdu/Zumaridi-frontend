import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuTwitter = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M20.165 2.108a7.288 7.288 0 0 1-2.11.585A3.721 3.721 0 0 0 19.67.634a7.282 7.282 0 0 1-2.333.903A3.662 3.662 0 0 0 15.25.409a3.637 3.637 0 0 0-2.332.39 3.703 3.703 0 0 0-1.615 1.75 3.764 3.764 0 0 0-.229 2.382A10.335 10.335 0 0 1 6.88 3.802 10.46 10.46 0 0 1 3.5 1.043a3.754 3.754 0 0 0-.497 1.87c0 .613.149 1.216.434 1.757.285.54.697 1 1.2 1.34a3.631 3.631 0 0 1-1.664-.465v.048c0 .86.294 1.692.83 2.357A3.668 3.668 0 0 0 5.923 9.24a3.657 3.657 0 0 1-1.66.064c.235.74.692 1.386 1.308 1.849.615.463 1.358.72 2.125.734a7.316 7.316 0 0 1-5.441 1.541A10.3 10.3 0 0 0 7.886 15.1c6.76 0 10.456-5.668 10.456-10.584 0-.16-.004-.321-.011-.481a7.522 7.522 0 0 0 1.832-1.925l.002-.002Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuTwitter.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuTwitter;
