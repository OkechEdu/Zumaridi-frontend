import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundTicktock = ({ size, color, className, ...props }: Props) => {
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
      <circle cx={38} cy={38} r={38} fill="#2F88FF" />
      <path
        d="M49.592 27.806a8.121 8.121 0 0 1-.702-.408 9.863 9.863 0 0 1-1.8-1.53c-1.344-1.537-1.846-3.096-2.03-4.187h.006c-.153-.908-.09-1.494-.079-1.494h-6.12v23.66c0 .317 0 .632-.012.942 0 .038-.005.073-.006.116 0 .016 0 .035-.005.052v.014a5.194 5.194 0 0 1-2.613 4.123c-.772.44-1.645.67-2.533.669-2.85 0-5.162-2.325-5.162-5.195 0-2.872 2.312-5.197 5.162-5.197.54 0 1.077.086 1.59.253l.008-6.232a11.366 11.366 0 0 0-8.76 2.566 12.007 12.007 0 0 0-2.62 3.23c-.258.444-1.233 2.235-1.35 5.139-.075 1.647.42 3.357.657 4.061v.016c.147.415.723 1.834 1.66 3.029.757.96 1.65 1.802 2.651 2.502v-.016l.014.016c2.961 2.01 6.247 1.88 6.247 1.88.568-.025 2.473 0 4.636-1.025 2.398-1.137 3.763-2.83 3.763-2.83a11.763 11.763 0 0 0 2.052-3.409c.554-1.456.738-3.201.738-3.898V32.1c.075.044 1.064.698 1.064.698s1.425.914 3.646 1.508c1.593.422 3.742.513 3.742.513v-6.076c-.752.083-2.28-.155-3.846-.934l.002-.002Z"
        fill="#fff"
      />
    </svg>
  );
};
SvgZuRoundTicktock.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundTicktock;
