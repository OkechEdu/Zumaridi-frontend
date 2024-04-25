import Select, { Props as SelectProp } from "./Select";

type Props = {
  label?: string;
  errors?: string;
  touched?: boolean;
} & SelectProp;

const FormSelect = ({ id, label, errors, touched, required, ...rest }: Props) => {
  const error = touched !== undefined && errors !== undefined;
  return (
    <div className="space-y-2">
      {label !== undefined && (
        <label htmlFor={id} className="block text-lg text-gray-200">
          {label} {required ? "*" : ""}
        </label>
      )}

      <Select
        {...rest}
        className={`${error ? "border-red text-red placeholder:text-red" : ""} w-full`}
      />
      {error && <p className="text-red text-base ">{errors}</p>}
    </div>
  );
};

export default FormSelect;
