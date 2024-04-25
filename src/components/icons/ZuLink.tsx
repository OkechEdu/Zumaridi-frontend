import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLink = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M21.42 17.395a1.332 1.332 0 0 1-.945-2.273l2.624-2.638a5.277 5.277 0 0 0 1.568-3.785A5.33 5.33 0 0 0 23.1 4.9c-2.088-2.09-5.49-2.088-7.582 0l-2.621 2.635a1.333 1.333 0 0 1-1.891-1.88l2.623-2.637c3.132-3.132 8.227-3.132 11.357-.003a7.977 7.977 0 0 1 2.346 5.683 7.917 7.917 0 0 1-2.352 5.674l-2.616 2.631c-.26.26-.602.39-.945.39Zm-7.055 7.592 2.639-2.624a1.333 1.333 0 1 0-1.88-1.89l-2.64 2.626a5.37 5.37 0 0 1-7.583 0A5.368 5.368 0 0 1 4.9 15.52l2.638-2.624a1.333 1.333 0 1 0-1.88-1.89l-2.64 2.626c-3.13 3.13-3.13 8.221 0 11.352a8.008 8.008 0 0 0 5.679 2.347 7.98 7.98 0 0 0 5.67-2.344Zm-3.422-6.044 8.034-8.034a1.332 1.332 0 1 0-1.885-1.885l-8.035 8.033A1.332 1.332 0 0 0 10 19.333c.341 0 .683-.13.943-.39Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLink.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLink;
