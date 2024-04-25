import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuShow = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M12 9.5a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3Z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        d="M12 5.5c-7.633 0-9.927 6.617-9.948 6.684l-.106.316.105.316C2.073 12.883 4.367 19.5 12 19.5s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 12.117 19.633 5.5 12 5.5Zm0 12c-5.351 0-7.424-3.846-7.926-5 .504-1.158 2.578-5 7.926-5 5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5Z"
        fill="currentColor"
        fillOpacity={0.5}
      />
    </svg>
  );
};
SvgZuShow.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuShow;
