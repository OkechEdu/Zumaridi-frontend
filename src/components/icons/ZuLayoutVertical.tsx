import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLayoutVertical = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M7.271 8.466 7.314.498c.001-.173.142-.312.314-.311l6.198.033c2.083.012 3.12 1.059 3.108 3.142l-.027 5.156a.312.312 0 0 1-.315.311l-9.01-.048a.312.312 0 0 1-.31-.315Zm9.596 7.396.028-5.156a.312.312 0 0 0-.311-.314l-9.01-.049a.312.312 0 0 0-.315.311l-.043 7.968c0 .174.138.314.311.315l6.198.033c2.083.011 3.13-1.025 3.142-3.108ZM5.44.175 3.41.165C1.326.152.28 1.188.268 3.271L.2 15.772c-.012 2.083 1.024 3.13 3.108 3.142l2.03.011a.312.312 0 0 0 .315-.31L5.752.488A.312.312 0 0 0 5.44.175Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLayoutVertical.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLayoutVertical;
