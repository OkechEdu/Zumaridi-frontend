import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuPinetrest = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M0 12.261c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.19.597 2.16 1.769 2.16 2.123 0 3.756-2.24 3.756-5.472 0-2.86-2.056-4.86-4.991-4.86-3.398 0-5.393 2.55-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.19-.332 1.355-.053.218-.173.265-.4.16-1.492-.695-2.424-2.876-2.424-4.628 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.9 0 4.116-2.595 7.43-6.199 7.43-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235 1.118.344 2.304.53 3.534.53 6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuPinetrest.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuPinetrest;
