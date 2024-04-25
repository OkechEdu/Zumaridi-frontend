import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuUpload = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 38"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M29.828 37.5H1.83a1.5 1.5 0 0 1 0-3h27.998a1.5 1.5 0 0 1 0 3ZM8.17 16v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V16h4.846c1.792 0 2.662-2.188 1.36-3.418L17.826.726a2.66 2.66 0 0 0-3.652 0L1.624 12.582C.322 13.812 1.192 16 2.984 16H8.17Z"
        fill="#25314C"
      />
    </svg>
  );
};
SvgZuUpload.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuUpload;
