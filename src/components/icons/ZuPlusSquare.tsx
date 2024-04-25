import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPlusSquare = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.493 0H4.507C1.507 0 0 1.493 0 4.493v15C0 22.493 1.507 24 4.507 24h14.986C22.507 24 24 22.493 24 19.493v-15C24 1.493 22.507 0 19.493 0Zm-2.826 13H13v3.667c0 .546-.453 1-1 1-.547 0-1-.454-1-1V13H7.333c-.546 0-1-.453-1-1 0-.547.454-1 1-1H11V7.333c0-.546.453-1 1-1 .547 0 1 .454 1 1V11h3.667c.546 0 1 .453 1 1 0 .547-.454 1-1 1Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPlusSquare.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPlusSquare;
