import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuDownlaod = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M1.072 5.835a.632.632 0 0 1 .434-1.09h1.546V1.553c0-.352.286-.638.638-.638h3.83c.352 0 .638.286.638.638v3.192h1.656c.572 0 .85.698.434 1.09L6.243 9.62a.849.849 0 0 1-1.166 0L1.072 5.835Zm9.056 6.09H1.192a.479.479 0 0 0 0 .958h8.936a.479.479 0 0 0 0-.958Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuDownlaod.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuDownlaod;
