// import React from "react";
// import { Field, ErrorMessage } from "formik";

// interface InputFormGroupProps {
//   nameAndId: string;
//   placeholder?: string;
//   label: string | React.ReactElement;
//   type: "text" | "number" | "email";
//   className?: string;
// }

// function InputFormGroup({ nameAndId, placeholder, label, type, className }: InputFormGroupProps) {
//   return (
//     <div className="">
//       <label className="text-black text-[18px] font-normal pb-2" htmlFor={nameAndId}>
//         <span className="">{label}</span>
//       </label>

//       <Field
//         name={nameAndId}
//         id={nameAndId}
//         as={"input"}
//         placeholder={placeholder}
//         type={type}
//         className={
//           `${className:string}` ||
//           "border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-3"
//         }
//       />

//       <ErrorMessage component="label" name={nameAndId} className="text-base w-full text-red" />
//     </div>
//   );
// }

// export default InputFormGroup;

import { Field, ErrorMessage } from "formik";

interface InputFormGroupProps {
  nameAndId: string;
  placeholder: string;
  label: string;
  type?: "text" | "number" | "email";
  className?: string;
  labelClassName?: string;
}

function InputFormGroup({
  nameAndId,
  placeholder,
  label,
  type,
  className,
  labelClassName
}: InputFormGroupProps) {
  return (
    <div>
      <label
        className={`text-black text-[18px] font-normal pb-2 ${labelClassName ?? ""}`}
        htmlFor={nameAndId}
      >
        <span className="">{label}</span>
      </label>

      <Field
        name={nameAndId}
        id={nameAndId}
        as={"input"}
        placeholder={placeholder}
        type={type ?? "text"}
        className={
          className ??
          "border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-3"
        }
      />

      <ErrorMessage component="label" name={nameAndId} className="text-base w-full text-red" />
    </div>
  );
}

export default InputFormGroup;
