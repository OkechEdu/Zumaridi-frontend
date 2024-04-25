import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuTelegram = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 29"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.313 1.014a2.375 2.375 0 0 1 3.265 2.575l-3.59 21.782c-.35 2.1-2.654 3.306-4.581 2.259-1.612-.876-4.006-2.225-6.16-3.632-1.076-.705-4.374-2.961-3.969-4.567.348-1.372 5.89-6.53 9.057-9.598 1.243-1.205.676-1.9-.792-.791-3.646 2.752-9.497 6.936-11.432 8.114-1.706 1.039-2.596 1.216-3.66 1.039-1.941-.323-3.742-.823-5.211-1.433-1.986-.823-1.889-3.553-.002-4.348l27.075-11.4Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuTelegram.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuTelegram;
