interface TextareaInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: any) => void;
}

const TextareaInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
}: TextareaInputProps) => {
  return (
    <div className="fm-T">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
