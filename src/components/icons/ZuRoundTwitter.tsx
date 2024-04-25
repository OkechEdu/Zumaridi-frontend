import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundTwitter = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 76 76"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx={38} cy={38} r={38} fill="#55ACEE" />
      <path
        d="M56.435 26.817a14.771 14.771 0 0 1-4.236 1.16 7.394 7.394 0 0 0 3.243-4.081 14.723 14.723 0 0 1-4.684 1.789 7.379 7.379 0 0 0-12.568 6.729 20.946 20.946 0 0 1-15.203-7.708 7.373 7.373 0 0 0-.998 3.709 7.378 7.378 0 0 0 3.28 6.14 7.359 7.359 0 0 1-3.34-.923v.095a7.378 7.378 0 0 0 5.917 7.232 7.428 7.428 0 0 1-3.331.127 7.38 7.38 0 0 0 6.89 5.12 14.8 14.8 0 0 1-9.16 3.16c-.59 0-1.177-.035-1.762-.104a20.86 20.86 0 0 0 11.305 3.314c13.57 0 20.988-11.238 20.988-20.985a21.2 21.2 0 0 0-.023-.954 14.995 14.995 0 0 0 3.678-3.815l.004-.005Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuRoundTwitter.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundTwitter;
