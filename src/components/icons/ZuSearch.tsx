import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuSearch = ({ size, color, className, ...props }: Props) => {
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
        d="m19.354 18.646-4.009-4.009A8.456 8.456 0 0 0 17.501 9c0-4.687-3.813-8.5-8.5-8.5C4.314.5.501 4.313.501 9c0 4.687 3.813 8.5 8.5 8.5 2.164 0 4.135-.82 5.637-2.156l4.009 4.009a.498.498 0 0 0 .708 0 .501.501 0 0 0-.001-.707ZM1.5 9c0-4.135 3.364-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.364 7.5-7.5 7.5S1.5 13.135 1.5 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuSearch.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuSearch;
