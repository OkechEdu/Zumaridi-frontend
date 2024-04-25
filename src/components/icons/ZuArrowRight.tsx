import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuArrowRight = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58942 0.577574C7.26398 0.252137 6.73634 0.252137 6.41091 0.577574C6.08547 0.903011 6.08547 1.43065 6.41091 1.75609L10.8217 6.16683H1.16683C0.706592 6.16683 0.333496 6.53993 0.333496 7.00016C0.333496 7.4604 0.706592 7.8335 1.16683 7.8335H10.8217L6.41091 12.2442C6.08547 12.5697 6.08547 13.0973 6.41091 13.4228C6.73634 13.7482 7.26398 13.7482 7.58942 13.4228L13.4228 7.58942C13.7482 7.26398 13.7482 6.73634 13.4228 6.41091L7.58942 0.577574Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuArrowRight.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuArrowRight;
