import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuShareScreen = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M3.313.249A2.813 2.813 0 0 0 .5 3.06v16.875a2.813 2.813 0 0 0 2.813 2.814h24.375a2.813 2.813 0 0 0 2.812-2.813V3.064A2.812 2.812 0 0 0 27.687.25H3.313V.249ZM16.16 5.05l4.069 4.069a.938.938 0 0 1-1.326 1.325l-2.468-2.468v9.309a.937.937 0 1 1-1.875 0V7.979l-2.463 2.465a.937.937 0 1 1-1.326-1.325l4.063-4.068a.938.938 0 0 1 1.326 0V5.05Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuShareScreen.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuShareScreen;
