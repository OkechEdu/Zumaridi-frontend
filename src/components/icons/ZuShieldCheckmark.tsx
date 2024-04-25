import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuShieldCheckmark = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 170"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M67.23.84a5 5 0 0 1 5.54 0 150.501 150.501 0 0 0 62.94 24.21A4.999 4.999 0 0 1 140 30v46a54.622 54.622 0 0 0-10-3.93v-37.8a159.686 159.686 0 0 1-56-20.81l-4-2.49-4 2.49a159.69 159.69 0 0 1-56 20.82V75c0 32.42 17.98 56.43 54.78 72.46 1.95 4.35 4.44 8.4 7.4 12.06l-.38.15a5 5 0 0 1-3.6 0C23.08 142.3 0 113.9 0 75V30a5 5 0 0 1 4.3-4.95A150.499 150.499 0 0 0 67.23.84ZM160 125a45 45 0 1 1-90 0 45 45 0 0 1 90 0Zm-21.46-18.54a4.997 4.997 0 0 0-7.08 0L105 132.93l-6.46-6.47a5.005 5.005 0 0 0-7.08 7.08l10 10a4.997 4.997 0 0 0 7.08 0l30-30a4.997 4.997 0 0 0 0-7.08Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuShieldCheckmark.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuShieldCheckmark;
