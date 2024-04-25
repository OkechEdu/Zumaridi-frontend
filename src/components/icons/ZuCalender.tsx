import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuCalender = ({ size, color, className, ...props }: Props) => {
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
        d="M16 2h-1.5V1a.5.5 0 0 0-1 0v1h-7V1a.5.5 0 0 0-1 0v1H4C1.71 2 .5 3.21.5 5.5V16c0 2.29 1.21 3.5 3.5 3.5h12c2.29 0 3.5-1.21 3.5-3.5V5.5C19.5 3.21 18.29 2 16 2ZM4 3h1.5v1a.5.5 0 0 0 1 0V3h7v1a.5.5 0 0 0 1 0V3H16c1.729 0 2.5.771 2.5 2.5v1h-17v-1C1.5 3.771 2.271 3 4 3Zm12 15.5H4c-1.729 0-2.5-.771-2.5-2.5V7.5h17V16c0 1.729-.771 2.5-2.5 2.5ZM6.75 11c0 .415-.334.75-.746.75A.755.755 0 0 1 5.25 11c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Zm4 0c0 .415-.334.75-.746.75A.755.755 0 0 1 9.25 11c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Zm4 0c0 .415-.334.75-.746.75a.755.755 0 0 1-.754-.75c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Zm-8 4c0 .415-.334.75-.746.75A.755.755 0 0 1 5.25 15c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Zm4 0c0 .415-.334.75-.746.75A.755.755 0 0 1 9.25 15c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Zm4 0c0 .415-.334.75-.746.75a.755.755 0 0 1-.754-.75c0-.415.327-.75.739-.75h.015c.412 0 .746.335.746.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuCalender.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuCalender;
