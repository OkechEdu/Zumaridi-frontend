import { Link } from "react-router-dom";

import type { ReactNode, ComponentProps } from "react";

type Props = {
  to?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "outline";
  children: ReactNode | string;
} & ComponentProps<"button">;

const Button = ({
  to,
  children,
  size = "md",
  variant = "full",
  className = "",
  ...rest
}: Props) => {
  const getSize = (size: string) => {
    switch (size) {
      case "sm":
        return "px-2 h-10";
      case "md":
        return "px-4 h-12";
      case "lg":
        return "px-6 h-16";

      default:
        return "p-1 h-10";
    }
  };
  const Button = () => (
    <button
      className={`${getSize(size)} ${
        variant === "full" ? "bg-primary text-white " : "border-2 border-primary text-primary"
      } ${className}  rounded-[6px] px-5 py-2 `}
      {...rest}
    >
      {children}
    </button>
  );

  if (to !== undefined)
    return (
      <Link to={to}>
        <Button />
      </Link>
    );

  return <Button />;
};

export default Button;
