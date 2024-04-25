import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuHide = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10 17.5c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L2.184 6.805C.646 8.472.063 10.151.052 10.184a.994.994 0 0 0 0 .633C.073 10.883 2.367 17.5 10 17.5Zm0-14c-1.837 0-3.346.396-4.604.981L1.707.793.293 2.207l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C19.927 10.117 17.633 3.5 10 3.5Zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L6.915 6.001A9.26 9.26 0 0 1 10 5.5c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558Z"
        fill="currentColor"
        fillOpacity={0.5}
      />
    </svg>
  );
};
SvgZuHide.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuHide;
