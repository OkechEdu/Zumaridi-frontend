import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import type { ReactNode, ComponentProps } from "react";

export type Props = {
  end?: ReactNode;
  size?: "sm" | "md" | "lg";
  onChange: ((field: any) => void) | ((e: string | React.ChangeEvent<any>) => void);
} & Omit<ComponentProps<"input">, "size">;

const Input = ({ end, size = "md", className = "", ...props }: Props) => {
  const [password, setPassword] = useState<boolean>(true);

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
  if (props.type === "password") {
    return (
      <div
        className={`${getSize(
          size
        )} ${className} flex items-center justify-between text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      >
        <input
          {...props}
          type={password ? "password" : "text"}
          className="w-full h-full bg-transparent"
        />
        <div className="cursor-pointer" onClick={() => setPassword(!password)}>
          {password ? "Show" : "Hide"}
        </div>
      </div>
    );
  }

  if (props.type === "tel") {
    return (
      <PhoneInput
        country={"gb"}
        preferredCountries={["us", "ng", "gb", "ke"]}
        onChange={(_, __, e) => props.onChange(e)}
        containerClass={`${className} w-full flex items-center border rounded-[6px]`}
        containerStyle={{ width: "100%" }}
        inputStyle={{ width: "100%", height: "64px", paddingLeft: "72px", border: "none" }}
        buttonStyle={{
          top: "25%",
          height: "50%",
          padding: "0 8px 0 16px",
          backgroundColor: "#ffffff",
          border: "none",
          borderRadius: "6px 0 0 6px",
          borderRight: "1px solid #8E8E93"
        }}
        inputProps={{
          id: props.id,
          name: props.name,
          placeholder: props.placeholder
        }}
      />
    );
  }

  if (end !== undefined) {
    return (
      <div
        className={`${getSize(
          size
        )} ${className} flex items-center justify-between text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      >
        <input {...props} className="w-3/4 md:w-4/5 h-full bg-transparent" />

        <div className="w-1/4 md:w-1/5 pl-4 h-full flex items-center justify-end">{end}</div>
      </div>
    );
  }

  return (
    <input
      className={`${getSize(
        size
      )} ${className} text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      {...props}
    />
  );
};

export default Input;
