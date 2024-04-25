import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLockPassword = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10 5.333h1.333A.667.667 0 0 1 12 6v8a.666.666 0 0 1-.667.667H.667A.667.667 0 0 1 0 14V6a.667.667 0 0 1 .667-.667H2v-.666a4 4 0 1 1 8 0v.666ZM1.333 6.667v6.666h9.334V6.667H1.333Zm4 2.666h1.334v1.334H5.333V9.333Zm-2.666 0H4v1.334H2.667V9.333Zm5.333 0h1.333v1.334H8V9.333Zm.667-4v-.666a2.667 2.667 0 1 0-5.334 0v.666h5.334Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLockPassword.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLockPassword;
