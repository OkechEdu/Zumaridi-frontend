import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number,
  color?: string,
  className?: string
} & SVGProps<SVGSVGElement>;
const SvgZuInstagram = ({ size, color, className, ...props }: Props) => {
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
      <g filter="url(#zu_instagram_svg__a)">
        <path
          d="M9.844 1.13H4.906a2.465 2.465 0 0 0-2.47 2.46v4.922a2.465 2.465 0 0 0 2.47 2.46h4.938a2.465 2.465 0 0 0 2.47-2.46V3.591a2.465 2.465 0 0 0-2.47-2.461Z"
          stroke="#000"
          strokeWidth={1.219}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#zu_instagram_svg__b)">
        <path
          d="M9.35 5.741a1.963 1.963 0 0 1-1.066 2.047A1.982 1.982 0 0 1 6 7.422a1.966 1.966 0 0 1 .488-3.14 1.981 1.981 0 0 1 2.306.356c.3.299.495.686.557 1.103Z"
          stroke="#000"
          strokeWidth={1.219}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#zu_instagram_svg__c)">
        <path
          d="M10.09 3.344h.005"
          stroke="#000"
          strokeWidth={1.219}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="zu_instagram_svg__a"
          x={0.609}
          y={0.521}
          width={15.97}
          height={15.936}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1.219} dy={2.437} />
          <feGaussianBlur stdDeviation={1.219} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1439_7675" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1439_7675" result="shape" />
        </filter>
        <filter
          id="zu_instagram_svg__b"
          x={3.593}
          y={3.452}
          width={10.044}
          height={10.03}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1.219} dy={2.437} />
          <feGaussianBlur stdDeviation={1.219} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1439_7675" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1439_7675" result="shape" />
        </filter>
        <filter
          id="zu_instagram_svg__c"
          x={8.263}
          y={2.735}
          width={6.098}
          height={6.093}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1.219} dy={2.437} />
          <feGaussianBlur stdDeviation={1.219} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1439_7675" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1439_7675" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
SvgZuInstagram.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuInstagram;
