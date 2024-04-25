import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundPintrest = ({ size, color, className, ...props }: Props) => {
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
      <circle cx={38} cy={38} r={38} fill="#CB1F27" />
      <g clipPath="url(#zu_round_pintrest_svg__a)">
        <path
          d="M19 38c0 8.111 5.084 15.037 12.24 17.762-.175-1.484-.36-3.93.039-5.646.343-1.476 2.218-9.402 2.218-9.402s-.565-1.132-.565-2.809c0-2.628 1.523-4.592 3.421-4.592 1.615 0 2.394 1.212 2.394 2.663 0 1.623-1.034 4.05-1.567 6.299-.445 1.883.945 3.418 2.8 3.418 3.362 0 5.948-3.545 5.948-8.662 0-4.53-3.256-7.695-7.903-7.695-5.38 0-8.539 4.036-8.539 8.208 0 1.626.626 3.368 1.408 4.316a.57.57 0 0 1 .131.543c-.144.599-.463 1.883-.525 2.146-.084.345-.274.42-.634.251-2.362-1.098-3.838-4.552-3.838-7.326 0-5.967 4.334-11.446 12.496-11.446 6.561 0 11.661 4.676 11.661 10.924 0 6.518-4.108 11.766-9.815 11.766-1.917 0-3.717-.998-4.335-2.174 0 0-.948 3.613-1.178 4.496-.446 1.717-1.685 3.889-2.453 5.122A18.99 18.99 0 0 0 38 57c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="zu_round_pintrest_svg__a">
          <path fill="#fff" transform="translate(19 19)" d="M0 0h38v38H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgZuRoundPintrest.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundPintrest;
