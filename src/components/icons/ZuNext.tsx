import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuNext = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 9"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M.265.791A.695.695 0 0 1 1.36.224l4.862 3.447a.695.695 0 0 1 .005 1.131L1.366 8.301a.695.695 0 0 1-1.101-.563V.79ZM8.6.442a.347.347 0 0 0-.695 0v7.64a.347.347 0 1 0 .695 0V.443Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuNext.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuNext;
