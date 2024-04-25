import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuEmail = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g clipPath="url(#zu_email_svg__a)" fill="currentColor">
        <path d="M16.322 2.766H3.112A1.834 1.834 0 0 0 1.279 4.6v1.468a.367.367 0 0 0 .191.322l8.073 4.403a.367.367 0 0 0 .351 0l8.072-4.403a.368.368 0 0 0 .191-.322V4.6a1.834 1.834 0 0 0-1.834-1.834Z" />
        <path d="M10.245 11.438a1.1 1.1 0 0 1-1.053 0L1.286 7.127l-.009.005v7.742a1.834 1.834 0 0 0 1.835 1.835h13.209a1.834 1.834 0 0 0 1.834-1.835V7.132l-.008-.005-7.903 4.31Z" />
      </g>
      <defs>
        <clipPath id="zu_email_svg__a">
          <path fill="currentColor" transform="translate(.911 .931)" d="M0 0h17.612v17.612H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgZuEmail.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuEmail;
