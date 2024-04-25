import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuYoutube = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M22.552 3.43a2.837 2.837 0 0 0-1.98-2.04C18.817.96 11.797.96 11.797.96s-7.021 0-8.776.47a2.837 2.837 0 0 0-1.98 2.041 29.592 29.592 0 0 0-.47 5.398 29.592 29.592 0 0 0 .47 5.439 2.837 2.837 0 0 0 1.98 1.96c1.755.469 8.776.469 8.776.469s7.02 0 8.775-.47a2.837 2.837 0 0 0 1.98-2.04c.319-1.768.476-3.562.47-5.358a29.589 29.589 0 0 0-.47-5.439Z"
        fill="currentColor"
      />
      <path d="m9.501 12.205 5.867-3.336-5.867-3.337v6.673Z" fill="#fff" />
    </svg>
  );
};
SvgZuYoutube.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuYoutube;
