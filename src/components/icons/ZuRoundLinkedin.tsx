import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundLinkedin = ({ size, color, className, ...props }: Props) => {
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
      <circle cx={38} cy={38} r={38} fill="#0A66C2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.93 33.2h5.88v2.93c.847-1.685 3.019-3.198 6.282-3.198 6.256 0 7.741 3.353 7.741 9.506v11.395H47.5V43.84c0-3.504-.847-5.48-3.004-5.48-2.99 0-4.234 2.13-4.234 5.479v9.995H33.93V33.201ZM23.068 53.565h6.333V32.932H23.07v20.632Zm7.24-27.36a4.008 4.008 0 0 1-1.192 2.853 4.074 4.074 0 0 1-2.881 1.185 4.1 4.1 0 0 1-2.879-1.183 4.033 4.033 0 0 1-1.19-2.855c0-1.072.427-2.098 1.192-2.855a4.095 4.095 0 0 1 5.759 0 4.019 4.019 0 0 1 1.192 2.855Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuRoundLinkedin.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundLinkedin;
