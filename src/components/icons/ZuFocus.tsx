import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFocus = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19 5H6.5A2.5 2.5 0 0 0 4 7.5V20a2.5 2.5 0 0 0 5 0V10h10a2.5 2.5 0 0 0 0-5Zm0 45H9V40a2.5 2.5 0 0 0-5 0v12.5A2.5 2.5 0 0 0 6.5 55H19a2.5 2.5 0 0 0 0-5ZM51.5 5H39a2.5 2.5 0 0 0 0 5h10v10a2.5 2.5 0 0 0 5 0V7.5A2.5 2.5 0 0 0 51.5 5Zm0 32.5A2.5 2.5 0 0 0 49 40v10H39a2.5 2.5 0 0 0 0 5h12.5a2.5 2.5 0 0 0 2.5-2.5V40a2.5 2.5 0 0 0-2.5-2.5Z"
        fill="#50C878"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 30s5.625-11.25 15-11.25S44 30 44 30s-5.625 11.25-15 11.25S14 30 14 30Zm3.394.244-.15-.244.154-.244a25.645 25.645 0 0 1 2.662-3.48c2.366-2.585 5.415-4.713 8.94-4.713 3.521 0 6.574 2.128 8.944 4.713A25.71 25.71 0 0 1 40.756 30a26.298 26.298 0 0 1-2.816 3.724c-2.366 2.585-5.415 4.714-8.94 4.714-3.521 0-6.574-2.129-8.944-4.714a25.7 25.7 0 0 1-2.662-3.48ZM34.625 30a5.625 5.625 0 1 1-3.97-5.378 2.812 2.812 0 1 0 3.722 3.722c.165.537.248 1.095.248 1.656Z"
        fill="#25373F"
      />
    </svg>
  );
};
SvgZuFocus.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFocus;
