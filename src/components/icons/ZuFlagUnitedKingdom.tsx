import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFlagUnitedKingdom = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.427 3.621H1.573C.704 3.621 0 4.325 0 5.194v10.613c0 .869.704 1.573 1.573 1.573h17.854c.869 0 1.573-.704 1.573-1.573V5.194c0-.869-.704-1.573-1.573-1.573Z"
        fill="#41479B"
      />
      <path
        d="M20.978 4.934a1.573 1.573 0 0 0-1.55-1.313h-.41L12.31 8.016V3.62H8.69v4.395L1.982 3.62h-.41c-.78 0-1.426.568-1.55 1.313L5.755 8.69H0v3.62h5.755L.022 16.068a1.573 1.573 0 0 0 1.55 1.313h.41l6.708-4.395v4.395h3.62v-4.395l6.708 4.395h.41c.78 0 1.426-.568 1.55-1.313l-5.733-3.756H21V8.69h-5.755l5.733-3.756Z"
        fill="#F5F5F5"
      />
      <path
        d="M11.586 3.621H9.414v5.793H0v2.173h9.414v5.793h2.172v-5.793H21V9.414h-9.414V3.621Z"
        fill="#FF4B55"
      />
      <path
        d="m1.017 17.278 7.653-4.967H7.34L.38 16.828c.17.2.39.355.638.45ZM14.207 12.31h-1.33l7.412 4.812c.207-.136.38-.32.504-.536l-6.586-4.275ZM.166 4.49l6.47 4.2h1.33L.634 3.932a1.579 1.579 0 0 0-.469.559ZM13.64 8.69l6.975-4.527a1.575 1.575 0 0 0-.644-.445L12.31 8.69h1.33Z"
        fill="#FF4B55"
      />
    </svg>
  );
};
SvgZuFlagUnitedKingdom.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFlagUnitedKingdom;
