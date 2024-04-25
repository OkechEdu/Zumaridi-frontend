import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuSignalStream = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.896 3.108A5.506 5.506 0 0 1 15.5 7c0 1.464-.57 2.846-1.604 3.892a.498.498 0 0 1-.707.003.5.5 0 0 1-.004-.707A4.504 4.504 0 0 0 14.5 7a4.509 4.509 0 0 0-1.315-3.188.5.5 0 0 1 .711-.704Zm-7.084-.004a.5.5 0 0 0-.707.004A5.506 5.506 0 0 0 4.501 7c0 1.464.57 2.846 1.604 3.892a.498.498 0 0 0 .707.003.5.5 0 0 0 .004-.707A4.505 4.505 0 0 1 5.501 7c0-1.198.467-2.331 1.315-3.188a.502.502 0 0 0-.004-.708ZM17.062.665a.5.5 0 1 0-.742.67A8.423 8.423 0 0 1 18.5 7.002a8.418 8.418 0 0 1-2.181 5.665.5.5 0 0 0 .742.67A9.423 9.423 0 0 0 19.5 7c0-2.348-.866-4.6-2.438-6.336ZM3.646.629a.5.5 0 0 0-.707.035A9.423 9.423 0 0 0 .501 7a9.42 9.42 0 0 0 2.438 6.335.503.503 0 0 0 .707.036.5.5 0 0 0 .035-.706A8.423 8.423 0 0 1 1.5 7c0-2.101.774-4.112 2.181-5.665a.5.5 0 0 0-.035-.705ZM12 7c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm-1 0a1.001 1.001 0 0 0-2 0 1.001 1.001 0 0 0 2 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuSignalStream.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuSignalStream;
