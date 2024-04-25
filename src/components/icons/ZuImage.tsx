import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuImage = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 48"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M42 .667H10c-6.448 0-10 3.551-10 10v26.666c0 6.448 3.552 10 10 10h32c6.448 0 10-3.552 10-10V10.667c0-6.449-3.552-10-10-10Zm-32 4h32c4.205 0 6 1.794 6 6V30L35.893 17.893a2.688 2.688 0 0 0-3.786 0L18.933 31.066a1.336 1.336 0 0 1-1.866 0L14.56 28.56a2.688 2.688 0 0 0-3.787 0L4 35.333V10.667c0-4.206 1.795-6 6-6ZM12 16a3.32 3.32 0 0 1 3.315-3.334h.027A3.332 3.332 0 0 1 18.669 16a3.33 3.33 0 0 1-3.328 3.333A3.343 3.343 0 0 1 12 16Z"
        fill="#25314C"
      />
    </svg>
  );
};
SvgZuImage.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuImage;
