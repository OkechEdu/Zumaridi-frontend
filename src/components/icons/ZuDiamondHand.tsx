import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuDiamondHand = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M55 37.5V40l-20 6.25-17.5-4.75V45h-15V17.5h20L38 23.25c2.5 1 4.5 3.75 4.5 6.75h5c4.25 0 7.5 3.25 7.5 7.5ZM12.5 40V22.5h-5V40h5Zm37.25-3.5c-.5-1-1.25-1.5-2.25-1.5H34c-1.25 0-2.75-.25-4-.5l-5.75-2 1.5-4.75 6 2c.75 0 5.75.25 5.75.25 0-1-.5-1.75-1.5-2l-14.5-5.5h-4v13.75L35 41l14.75-4.5Z"
        fill="currentColor"
      />
      <path
        d="M33.492 10.805h23.766m-24.485.697 11.869 15.394a.924.924 0 0 0 1.466 0l11.868-15.394a.944.944 0 0 0 .055-1.07l-4.026-6.5a.927.927 0 0 0-.788-.44H37.533a.927.927 0 0 0-.788.44l-4.026 6.5a.944.944 0 0 0 .054 1.07v0Z"
        stroke="currentColor"
        strokeWidth={2.438}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m53.602 4.406-2.743 6.399-5.484-7.313m-8.227.914 2.743 6.399 5.484-7.313m0 22.852-5.484-15.54m5.484 15.54 5.484-15.54"
        stroke="currentColor"
        strokeWidth={2.438}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuDiamondHand.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuDiamondHand;
