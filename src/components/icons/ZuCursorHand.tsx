import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCursorHand = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g clipPath="url(#zu_cursor_hand_svg__a)">
        <path
          d="M13.37 4.913a1.296 1.296 0 0 0-2.183.261 1.329 1.329 0 0 0-2.2.372A1.37 1.37 0 0 0 6.712 6.99a1.346 1.346 0 0 0-1.15 1.21 1.363 1.363 0 0 0 .304.999l3.33 4.091a75.565 75.565 0 0 1-1.787-.4 1.329 1.329 0 0 0-1.27.234 1.404 1.404 0 0 0-.207 2.038c.503.558 3.3 1.698 4.966 2.2 2.522.763 3.815.12 3.863.08l3.4-2.766a.383.383 0 0 0 .128-.206 5.471 5.471 0 0 0-.4-2.967c-.49-1.262-1.486-2.836-3.056-4.798L13.37 4.913Zm3.819 6.857c.319.763.451 1.59.386 2.415l-3.203 2.606c-.189.079-1.282.452-3.278-.153-1.996-.604-4.33-1.676-4.604-1.98a.625.625 0 0 1-.151-.483.633.633 0 0 1 .247-.449.596.596 0 0 1 .613-.118c.207.063 1.552.35 2.346.526l.354-1.17-3.45-4.24a.617.617 0 1 1 .953-.775l2.93 3.6.58-.474-3.418-4.201a.63.63 0 0 1 .97-.789l3.453 4.243.581-.473L9.75 6.478a.596.596 0 1 1 .921-.75l3.009 3.697.582-.473-2.341-2.876a.554.554 0 0 1 .856-.697l1.46 1.794c1.545 1.917 2.497 3.404 2.952 4.597Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="zu_cursor_hand_svg__a">
          <path fill="currentColor" transform="rotate(-39.137 15.127 3.873)" d="M0 0h15v15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgZuCursorHand.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCursorHand;
