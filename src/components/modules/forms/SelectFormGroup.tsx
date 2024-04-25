import React from "react";
import { ErrorMessage, Field } from "formik";

interface Props {
  nameAndId: string;
  placeholder?: string;
  label?: string | React.ReactElement;
  disabled?: boolean;
  children: React.ReactNode;
}

function SelectFormGroup({ nameAndId, placeholder, label, disabled, children }: Props) {
  return (
    <div className="">
      <label className="" htmlFor={nameAndId}>
        <span className="label-text">{label}</span>
      </label>
      <div>
        <Field
          name={nameAndId}
          id={nameAndId}
          as={"select"}
          placeholder={placeholder}
          className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] py-2 px-4 text-black"
          disabled={disabled}
        >
          {children}
        </Field>
        <ErrorMessage
          component="label"
          name={nameAndId}
          className="label-text-alt w-full text-alerts-error-color"
        />
      </div>
    </div>
  );
}

export default SelectFormGroup;
