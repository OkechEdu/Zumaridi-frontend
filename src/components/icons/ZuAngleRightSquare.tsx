import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuAngleRightSquare = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M15.625 0H4.375C1.84 0 .5 1.34.5 3.875v11.25C.5 17.66 1.84 19 4.375 19h11.25c2.535 0 3.875-1.34 3.875-3.875V3.875C19.5 1.34 18.16 0 15.625 0ZM18.5 15.125c0 1.961-.913 2.875-2.875 2.875H4.375C2.413 18 1.5 17.086 1.5 15.125V3.875C1.5 1.914 2.413 1 4.375 1h11.25c1.962 0 2.875.914 2.875 2.875v11.25Zm-6.146-5.979a.5.5 0 0 1 0 .707l-3 3a.498.498 0 0 1-.708 0 .5.5 0 0 1 0-.707L11.292 9.5 8.646 6.854a.5.5 0 0 1 .707-.707l3.001 2.999Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuAngleRightSquare.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuAngleRightSquare;
