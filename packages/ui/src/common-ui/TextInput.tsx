import React from "react";

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const TextInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: TextInputProps) => {
  return (
    <div className="fm-n">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
