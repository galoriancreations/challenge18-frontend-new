interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string | null;
  Icon: React.FC;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, Icon, onChange }) => (
  <label className="input input-bordered flex items-center gap-2">
    <Icon />
    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder={label}
      className="grow p-2 border rounded-md focus:outline-none"
    />
  </label>
);

export default InputField;
