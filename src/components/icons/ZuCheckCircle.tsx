import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuCheckCircle = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 119 119"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M59.5 0C26.69 0 0 26.69 0 59.5S26.69 119 59.5 119 119 92.31 119 59.5 92.31 0 59.5 0Zm0 113.333c-29.682 0-53.833-24.151-53.833-53.833S29.818 5.667 59.5 5.667s53.833 24.151 53.833 53.833-24.151 53.833-53.833 53.833Zm21.84-69.06a2.835 2.835 0 0 1 0 4.007L54.892 74.726a2.846 2.846 0 0 1-4.012 0l-13.22-13.22a2.835 2.835 0 0 1 0-4.007 2.835 2.835 0 0 1 4.006 0l11.22 11.22 24.44-24.44a2.837 2.837 0 0 1 4.012-.005Z"
        fill="#39B755"
      />
    </svg>
  );
};
SvgZuCheckCircle.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCheckCircle;
