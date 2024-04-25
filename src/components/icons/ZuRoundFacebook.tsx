import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuRoundFacebook = ({ size, color, className, ...props }: Props) => {
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
      <circle cx={38} cy={38} r={38} fill="#1877F2" />
      <g clipPath="url(#zu_round_facebook_svg__a)">
        <path
          d="M57 38c0-10.496-8.51-19-19-19-10.496 0-19 8.504-19 19 0 9.481 6.946 17.342 16.031 18.766V43.493h-4.825v-5.492h4.825v-4.188c0-4.76 2.832-7.39 7.174-7.39 2.08 0 4.256.37 4.256.37v4.676h-2.4c-2.356 0-3.092 1.466-3.092 2.968V38h5.269l-.847 5.492h-4.422v13.273C50.047 55.34 57 47.48 57 37.999V38Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="zu_round_facebook_svg__a">
          <path fill="#fff" transform="translate(19 19)" d="M0 0h38v38H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgZuRoundFacebook.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuRoundFacebook;
