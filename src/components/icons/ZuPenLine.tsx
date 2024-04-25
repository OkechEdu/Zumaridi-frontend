import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPenLine = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m12.667 8.146-7.78 7.607H.583v-4.227l7.746-7.64c.101-.1.265-.1.366 0l3.973 3.902c.1.099.1.26 0 .358ZM13.59 6.9c.1.099.264.099.365 0l1.617-1.587a1.677 1.677 0 0 0 0-2.401L13.66 1.035a1.751 1.751 0 0 0-2.445 0L9.598 2.623a.25.25 0 0 0 0 .358L13.59 6.9Zm2.49 8.219h-6.026a.64.64 0 0 0-.646.634c0 .35.29.634.646.634h6.026a.64.64 0 0 0 .645-.634.64.64 0 0 0-.645-.634Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPenLine.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPenLine;
