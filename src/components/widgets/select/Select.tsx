import type { Option } from "types";
import type { ComponentProps } from "react";

export type Props = {
  size?: "sm" | "md" | "lg";
  options: Option[];
} & Omit<ComponentProps<"select">, "size">;

const Select = ({ options, size = "md", className = "", ...props }: Props) => {
  // const [selected, onSelect] = useState("Enter Industry");
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

  return (
    <select
      className={`${getSize(
        size
      )} ${className} text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary space-y-1`}
      {...props}
    >
      {options.map(({ value, title }, key) => (
        <option key={key} value={value} className="text-lg">
          {title}
        </option>
      ))}
    </select>
  );
};

export default Select;
