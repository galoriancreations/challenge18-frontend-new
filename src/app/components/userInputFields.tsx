interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string | null;
  Icon: React.FC;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, Icon, onChange, error }) => (
  <div>
    <label className="input input-bordered flex items-center gap-2">
      <Icon />
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={label}
        className={`grow p-2 border rounded-md focus:outline-none ${error ? "border-red-500" : "border-gray-300"}`}
      />
    </label>{" "}
    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
  </div>
);

export default InputField;
