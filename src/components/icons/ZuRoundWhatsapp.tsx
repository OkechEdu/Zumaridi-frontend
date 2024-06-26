import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundWhatsapp = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 76 76"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx={38} cy={38} r={38} fill="#1FAF38" />
      <path
        d="m23.006 53 2.028-7.452A14.931 14.931 0 0 1 23 38c0-8.285 6.715-15 15-15s15 6.715 15 15-6.715 15-15 15a14.93 14.93 0 0 1-7.545-2.032L23.006 53Zm9.58-22.038a1.44 1.44 0 0 0-.556.15 1.939 1.939 0 0 0-.441.342c-.18.17-.282.316-.391.459a4.093 4.093 0 0 0-.848 2.517c.003.735.195 1.45.495 2.12.614 1.353 1.623 2.785 2.956 4.113.322.319.635.64.972.939a14.172 14.172 0 0 0 5.76 3.069l.854.13c.277.015.555-.006.834-.02.437-.022.863-.14 1.25-.346.196-.101.388-.211.574-.33 0 0 .064-.042.188-.135.202-.15.327-.256.495-.432.124-.129.232-.28.314-.453.117-.245.234-.711.282-1.1.037-.297.026-.459.022-.559-.006-.16-.14-.327-.285-.398l-.873-.391s-1.306-.569-2.102-.931a.746.746 0 0 0-.265-.062.723.723 0 0 0-.567.19v-.003c-.008 0-.108.086-1.193 1.4a.525.525 0 0 1-.552.195 2.117 2.117 0 0 1-.287-.099c-.186-.078-.25-.108-.378-.163l-.007-.004a9.017 9.017 0 0 1-2.355-1.5c-.189-.164-.364-.344-.544-.518a9.445 9.445 0 0 1-1.53-1.903l-.089-.142a1.39 1.39 0 0 1-.153-.308c-.057-.22.092-.397.092-.397s.364-.399.533-.615a6.56 6.56 0 0 0 .395-.56c.177-.285.233-.577.14-.803-.42-1.026-.855-2.048-1.303-3.062-.088-.201-.35-.345-.589-.373a6.658 6.658 0 0 0-.243-.024 5.08 5.08 0 0 0-.605.006v.001Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuRoundWhatsapp.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundWhatsapp;
