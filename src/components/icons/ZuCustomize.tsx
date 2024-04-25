import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCustomize = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M0 4C0 2.495.78.92 2 0c0 .845.69 2 2 2a3 3 0 0 1 3 3c0 .386-.079.752-.212 1.091a74.518 74.518 0 0 1 2.191 1.808l-2.08 2.08a75.847 75.847 0 0 1-1.808-2.191c-.347.139-.717.21-1.091.212-2.21 0-4-1.79-4-4Zm12.152 6.848 1.341-1.341c.621.32 1.309.489 2.007.493A4.5 4.5 0 0 0 20 5.5c0-.725-.188-1.401-.493-2.007L16 7l-2-2 3.507-3.507A4.446 4.446 0 0 0 15.5 1 4.5 4.5 0 0 0 11 5.5c0 .725.188 1.401.493 2.007L1 18l2 2 6.848-6.848a68.56 68.56 0 0 0 5.977 5.449l1.425 1.149 1.5-1.5-1.149-1.425a68.56 68.56 0 0 0-5.449-5.977Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuCustomize.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCustomize;
