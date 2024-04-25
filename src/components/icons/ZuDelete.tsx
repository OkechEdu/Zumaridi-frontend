import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuDelete = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M8 4h4a2 2 0 1 0-4 0ZM6 4a4 4 0 0 1 8 0h5a1 1 0 1 1 0 2h-.882l-.886 10.34A4 4 0 0 1 13.246 20H6.754a4 4 0 0 1-3.986-3.66L1.882 6H1a1 1 0 0 1 0-2h5Zm7 6a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0v-4ZM8 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm-3.24 7.17A2 2 0 0 0 6.754 18h6.492a2 2 0 0 0 1.992-1.83L16.11 6H3.89l.872 10.17H4.76Z"
        fill="currentColor"
        fillOpacity={0.5}
      />
    </svg>
  );
};
SvgZuDelete.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuDelete;
