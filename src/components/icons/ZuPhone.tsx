import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPhone = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M10.74 11.119 9.497 12.87c-1.924-1.275-3.528-3.083-4.66-5.254l1.554-1.401c.182-.164.31-.392.366-.647a1.33 1.33 0 0 0-.061-.765L5.28 1.208a1.138 1.138 0 0 0-.507-.59.948.948 0 0 0-.724-.08l-2.695.789c-.251.074-.47.25-.615.493a1.32 1.32 0 0 0-.168.829c.473 3.798 2.03 7.32 4.435 10.032 2.405 2.712 5.527 4.467 8.896 5.001.257.04.519-.027.735-.19.216-.163.372-.41.438-.693l.698-3.04a1.33 1.33 0 0 0-.07-.816 1.128 1.128 0 0 0-.523-.572l-3.188-1.594a.946.946 0 0 0-.677-.07 1.05 1.05 0 0 0-.575.412Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPhone.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPhone;
