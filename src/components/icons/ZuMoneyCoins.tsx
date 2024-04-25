import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMoneyCoins = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M25.796 35.468H2.56V2.935h46.475V18.04"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.225 33.145c5.775 0 10.456-2.081 10.456-4.648 0-2.567-4.681-4.648-10.456-4.648-5.776 0-10.457 2.081-10.457 4.648 0 2.567 4.681 4.648 10.457 4.648Z"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.768 28.497v6.971c0 2.567 4.68 4.648 10.457 4.648 5.775 0 10.456-2.081 10.456-4.648v-6.971"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.768 35.468v6.972c0 2.566 4.68 4.647 10.457 4.647 5.775 0 10.456-2.08 10.456-4.647v-6.972"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.768 42.44v6.97c0 2.568 4.68 4.648 10.457 4.648 5.775 0 10.456-2.08 10.456-4.647V42.44M25.796 23.85a4.647 4.647 0 1 0 0-9.296 4.647 4.647 0 0 0 0 9.295Z"
        stroke="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuMoneyCoins.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMoneyCoins;
