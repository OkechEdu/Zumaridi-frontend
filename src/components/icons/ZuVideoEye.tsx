import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuVideoEye = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.342 10.5c0 .805-.652 1.458-1.458 1.458a1.465 1.465 0 0 1-1.466-1.458c0-.805.646-1.458 1.451-1.458h.015c.805 0 1.458.653 1.458 1.458Zm14.957-7.331-3.156 2.533a.438.438 0 0 0-.163.341v8.914c0 .132.06.258.163.341l3.155 2.533c.72.578 1.786.066 1.786-.856V4.025c0-.922-1.067-1.432-1.785-.856Zm-5.507 1.498v11.666c0 2.917-1.458 4.375-4.375 4.375H5.292c-2.917 0-4.375-1.458-4.375-4.375V4.667C.917 1.75 2.375.292 5.292.292h13.125c2.917 0 4.375 1.458 4.375 4.375Zm-5.368 4.872c-.795-1.337-2.581-3.596-5.57-3.596-2.988 0-4.773 2.259-5.569 3.596a1.877 1.877 0 0 0 0 1.922c.795 1.337 2.581 3.596 5.57 3.596 2.988 0 4.773-2.259 5.569-3.596a1.877 1.877 0 0 0 0-1.922Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuVideoEye.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuVideoEye;
