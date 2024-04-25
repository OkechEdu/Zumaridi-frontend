import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuBell = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M11.167 18.252A2.483 2.483 0 0 1 9.005 19.5a2.482 2.482 0 0 1-2.162-1.248.501.501 0 0 1 .433-.752h3.46a.499.499 0 0 1 .431.752ZM17.4 15.69c-.02-.03-1.9-2.41-1.9-5.19V7c0-.136-.005-.269-.013-.402a.317.317 0 0 0-.143-.242.288.288 0 0 0-.254-.031 3.4 3.4 0 0 1-1.065.174c-1.701.012-3.232-1.269-3.484-2.951a3.466 3.466 0 0 1 .45-2.326c.104-.172.039-.401-.153-.457A6.532 6.532 0 0 0 7.474.68C4.512 1.384 2.51 4.169 2.51 7.214V10.5c0 2.78-1.88 5.16-1.9 5.19-.12.15-.14.35-.06.53.09.17.26.28.45.28h16c.2 0 .37-.11.46-.28.08-.18.06-.38-.06-.53ZM14 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 14 1Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuBell.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuBell;
