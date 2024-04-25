import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFacebook = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 30"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.915.162h-3.16A5.235 5.235 0 0 0 7.03 1.724a5.367 5.367 0 0 0-1.543 3.771v3.2h-3.16v4.267h3.16v8.533H9.7v-8.533h3.16l1.054-4.267H9.701v-3.2c0-.283.111-.554.309-.754.197-.2.465-.312.745-.312h3.16V.162Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuFacebook.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFacebook;
