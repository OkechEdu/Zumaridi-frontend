import { Field, ErrorMessage } from "formik";

interface Props {
  nameAndId: string;
  placeholder: string;
  label: string;
}

function TextareaFormGroup({ nameAndId, placeholder, label }: Props) {
  return (
    <div className="form-control my-2 w-full">
      <label className="text-black text-[18px] font-normal pb-2" htmlFor={nameAndId}>
        <span className="">{label}</span>
      </label>
      <Field
        name={nameAndId}
        id={nameAndId}
        as="textarea"
        placeholder={placeholder}
        className={
          "h-[145px] w-full border-2 border-[#D1D1D6] rounded-lg px-4 py-3 text-black placeholder-[#D1D1D6]"
        }
      />
      <ErrorMessage component="label" name={nameAndId} className="text-red text-[12px]" />
    </div>
  );
}

export default TextareaFormGroup;
