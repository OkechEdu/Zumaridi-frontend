import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundYoutube = ({ size, color, className, ...props }: Props) => {
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
      <circle cx={38} cy={38} r={38} fill="red" />
      <path
        d="M53.11 29.288c.723 2.822.723 8.712.723 8.712s0 5.89-.723 8.712c-.403 1.56-1.579 2.786-3.069 3.201-2.706.754-12.041.754-12.041.754s-9.33 0-12.041-.754c-1.497-.421-2.671-1.647-3.069-3.201-.724-2.822-.724-8.712-.724-8.712s0-5.89.724-8.712c.402-1.56 1.579-2.786 3.069-3.201 2.71-.754 12.04-.754 12.04-.754s9.336 0 12.042.754c1.496.421 2.671 1.647 3.069 3.201ZM34.833 43.542l9.5-5.542-9.5-5.542v11.084Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuRoundYoutube.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundYoutube;
