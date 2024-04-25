import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuBrowser = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0ZM1.253 11.611h2.434a15.4 15.4 0 0 0 .75 4.278H2.542a9.708 9.708 0 0 1-1.288-4.278ZM11.61 4.89V1.272c1.679.266 3.155 1.622 4.155 3.617h-4.155Zm4.676 1.222c.46 1.273.745 2.726.805 4.278h-5.48V6.11h4.675Zm-5.898-4.84V4.89H6.234c1-1.995 2.476-3.35 4.155-3.617Zm0 4.84v4.278h-5.48c.06-1.552.344-3.005.804-4.278h4.676ZM3.687 10.39H1.253A9.717 9.717 0 0 1 2.54 6.11h1.897a15.45 15.45 0 0 0-.75 4.278Zm1.221 1.222h5.48v4.278H5.714c-.46-1.273-.745-2.725-.805-4.278Zm5.48 5.5v3.617c-1.678-.267-3.154-1.622-4.154-3.617h4.155Zm1.223 3.617v-3.617h4.156c-1 1.995-2.477 3.35-4.156 3.617Zm0-4.84v-4.277h5.481c-.06 1.553-.344 3.005-.805 4.278h-4.676Zm6.702-4.277h2.434a9.699 9.699 0 0 1-1.288 4.278h-1.897c.432-1.301.694-2.746.751-4.278Zm0-1.222a15.45 15.45 0 0 0-.75-4.278h1.896a9.7 9.7 0 0 1 1.288 4.278h-2.434Zm.313-5.5h-1.53a10.58 10.58 0 0 0-1.6-2.566 9.8 9.8 0 0 1 3.13 2.566ZM6.504 2.323a10.566 10.566 0 0 0-1.601 2.566h-1.53a9.807 9.807 0 0 1 3.131-2.566ZM3.374 17.11h1.53c.437.98.98 1.843 1.6 2.566a9.797 9.797 0 0 1-3.13-2.566Zm12.122 2.566a10.558 10.558 0 0 0 1.6-2.566h1.53a9.798 9.798 0 0 1-3.13 2.566Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuBrowser.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuBrowser;
