import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuImageUpload = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M23.37 10.666c-.349 0-.632.299-.632.667v3.724L17.133 9.14c-.712-.755-1.973-.755-2.686 0l-6.231 6.586-1.188-1.253c-.712-.755-1.973-.755-2.687 0l-3.078 3.248V6c0-2.305.974-3.333 3.158-3.333h10.105c.349 0 .632-.299.632-.667 0-.368-.283-.667-.632-.667H4.421C1.528 1.332 0 2.946 0 6v13.334C0 22.387 1.528 24 4.421 24H19.58C22.472 24 24 22.387 24 19.333v-8c.001-.368-.282-.667-.63-.667Zm-3.79 12H4.422c-2.095 0-3.067-.96-3.142-3.073l3.956-4.175c.239-.25.66-.25.9 0l1.187 1.252c.47.498 1.308.498 1.777 0l6.24-6.587c.238-.25.66-.25.9 0l6.498 6.86v2.39c0 2.306-.974 3.334-3.158 3.334Zm-.447-19.528a.694.694 0 0 1 0-.943l1.893-2a.628.628 0 0 1 .206-.144.615.615 0 0 1 .688.144l1.894 2a.694.694 0 0 1 0 .943.612.612 0 0 1-.894 0l-.816-.862V6c0 .368-.283.667-.632.667-.348 0-.631-.299-.631-.667V2.275l-.816.861a.606.606 0 0 1-.892.002ZM6.949 7.333c.697 0 1.263.597 1.263 1.333s-.566 1.333-1.263 1.333c-.698 0-1.264-.597-1.264-1.333s.566-1.333 1.264-1.333Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuImageUpload.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuImageUpload;
