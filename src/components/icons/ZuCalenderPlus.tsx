import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCalenderPlus = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 29"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M.667 8.267v-.6c0-2.667 1.333-4 4-4h1.666v-2c0-.547.454-1 1-1 .547 0 1 .453 1 1v2H17v-2c0-.547.453-1 1-1 .547 0 1 .453 1 1v2h1.667c2.666 0 4 1.333 4 4v.6a.4.4 0 0 1-.4.4h-23.2a.4.4 0 0 1-.4-.4Zm14.32 16.88a.393.393 0 0 1-.374.52H4.667c-2.667 0-4-1.334-4-4v-10.6a.4.4 0 0 1 .4-.4h23.2a.4.4 0 0 1 .4.4v4.546c0 .28-.267.454-.52.374a7.301 7.301 0 0 0-2.49-.307c-3.692.167-6.808 3.28-6.976 6.973-.041.88.066 1.707.306 2.494Zm-6.294-4.814c0-.736-.596-1.333-1.333-1.333h-.013c-.736 0-1.327.597-1.327 1.333a1.34 1.34 0 0 0 1.34 1.334c.736 0 1.333-.598 1.333-1.334Zm0-5.333c0-.736-.596-1.333-1.333-1.333h-.013c-.736 0-1.327.597-1.327 1.333a1.34 1.34 0 0 0 1.34 1.333c.736 0 1.333-.597 1.333-1.333Zm5.334 0c0-.736-.596-1.333-1.334-1.333h-.013c-.736 0-1.327.597-1.327 1.333a1.34 1.34 0 0 0 1.34 1.333c.736 0 1.334-.597 1.334-1.333Zm13.306 8a5.334 5.334 0 1 1-10.667 0 5.334 5.334 0 0 1 10.667 0Zm-3 0a.667.667 0 0 0-.666-.667h-1v-1a.667.667 0 0 0-1.334 0v1h-1a.667.667 0 0 0 0 1.334h1v1a.667.667 0 0 0 1.334 0v-1h1a.667.667 0 0 0 .666-.667Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuCalenderPlus.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCalenderPlus;
