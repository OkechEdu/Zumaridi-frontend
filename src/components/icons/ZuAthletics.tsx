import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuAthletics = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M46.287 16.087a5.779 5.779 0 1 0 0-11.558 5.779 5.779 0 0 0 0 11.558ZM32.803 16.087 22.63 28.109a5.136 5.136 0 0 0 1.333 7.754l8.898 5.191a1.285 1.285 0 0 1 .385 1.865l-9.432 12.978"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m13.54 19.94 4.623-6.935a1.284 1.284 0 0 1 1.413-.527l13.227 3.609 10.273 7.705 5.908 10.627a1.284 1.284 0 0 0 1.528.594l6.69-2.232M43.076 23.792l-8.99 10.634M18.677 40.486 5.835 55.896"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuAthletics.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuAthletics;
