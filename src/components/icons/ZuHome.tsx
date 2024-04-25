import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuHome = ({ size, color, className, ...props }: Props) => {
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
        d="m18.049 6.333-6.121-5.132a2.996 2.996 0 0 0-3.855 0L1.952 6.333C1.025 7.102.501 7.635.501 9.65V16c0 2.29 1.21 3.5 3.5 3.5h4v-5c0-1.103.897-2 2-2s2 .897 2 2v5h4c2.29 0 3.5-1.21 3.5-3.5V9.65c-.001-2.014-.525-2.547-1.452-3.317ZM18.5 16c0 1.729-.771 2.5-2.5 2.5h-3v-4c0-1.654-1.346-3-3-3s-3 1.346-3 3v4H4c-1.729 0-2.5-.771-2.5-2.5V9.65c0-1.643.319-1.908 1.09-2.547l6.125-5.135a1.997 1.997 0 0 1 2.57 0l6.125 5.135c.771.64 1.09.904 1.09 2.547V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuHome.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuHome;
