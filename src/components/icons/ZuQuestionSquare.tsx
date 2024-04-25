import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuQuestionSquare = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M13.342.693H3.657C1.72.693.752 1.643.752 3.546v9.51c0 1.903.968 2.854 2.905 2.854h9.685c1.937 0 2.906-.951 2.906-2.854v-9.51c0-1.902-.969-2.853-2.906-2.853ZM8.517 12.95a.857.857 0 0 1-.865-.846.85.85 0 0 1 .856-.845h.01c.475 0 .86.379.86.845a.854.854 0 0 1-.86.846ZM9.88 8.748c-.63.414-.747.645-.768.705a.645.645 0 0 1-.817.4.632.632 0 0 1-.407-.804c.156-.456.56-.886 1.272-1.356.88-.578.766-1.212.73-1.42a1.423 1.423 0 0 0-1.13-1.12 1.41 1.41 0 0 0-1.673 1.381.64.64 0 0 1-.646.634.64.64 0 0 1-.645-.634c0-.795.355-1.543.974-2.053a2.74 2.74 0 0 1 2.215-.576c1.091.19 1.986 1.075 2.176 2.152.19 1.067-.266 2.023-1.281 2.69Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuQuestionSquare.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuQuestionSquare;
