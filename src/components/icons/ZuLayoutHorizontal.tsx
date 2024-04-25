import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLayoutHorizontal = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M8.406 9.802H.438a.312.312 0 0 1-.313-.312V3.292C.125 1.208 1.167.167 3.25.167h5.156c.173 0 .313.14.313.312v9.01c0 .174-.14.313-.313.313ZM15.75.167h-5.156a.312.312 0 0 0-.313.312v9.01c0 .174.14.313.313.313h7.968c.173 0 .313-.14.313-.312V3.292c0-2.084-1.042-3.125-3.125-3.125ZM.125 11.677v2.031c0 2.084 1.042 3.125 3.125 3.125h12.5c2.083 0 3.125-1.041 3.125-3.125v-2.03a.312.312 0 0 0-.313-.313H.438a.312.312 0 0 0-.313.312Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLayoutHorizontal.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLayoutHorizontal;
