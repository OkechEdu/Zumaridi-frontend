import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPadlock = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 31"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.791 11.125V8.208c0-4.083-3.208-7.291-7.291-7.291-4.084 0-7.292 3.208-7.292 7.291v2.917c-2.48 0-4.375 1.896-4.375 4.375v10.208c0 2.48 1.896 4.375 4.375 4.375h14.583c2.48 0 4.375-1.895 4.375-4.375V15.5c0-2.48-1.896-4.375-4.375-4.375ZM8.125 8.208c0-2.479 1.896-4.375 4.375-4.375s4.375 1.896 4.375 4.375v2.917h-8.75V8.208Zm5.979 12.396-.146.146v2.042c0 .875-.583 1.458-1.458 1.458s-1.459-.583-1.459-1.458V20.75c-.875-.875-1.02-2.188-.146-3.063.876-.875 2.188-1.02 3.063-.145.875.729 1.02 2.187.146 3.062Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPadlock.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPadlock;
