import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuTiktok = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M17.32 4.823a5.139 5.139 0 0 1-.442-.258A6.231 6.231 0 0 1 15.74 3.6c-.85-.97-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .4-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.003.033v.01a3.28 3.28 0 0 1-1.65 2.603 3.227 3.227 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.28 0-1.815 1.46-3.283 3.26-3.283.34 0 .68.054 1.004.16l.005-3.936a7.178 7.178 0 0 0-5.532 1.62 7.583 7.583 0 0 0-1.655 2.04c-.163.281-.78 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.858 7.858 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187.359-.015 1.562 0 2.928-.647 1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V7.534c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V5.414c-.475.052-1.44-.098-2.43-.59h.002Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuTiktok.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuTiktok;
