import { Select, SelectItem } from "@heroui/react";

interface DropdownInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: any) => void;
  options: { value: string; label: string }[];
}

const DropdownInput = ({
  name,
  label,
  value,
  onChange,
  options = [],
}: DropdownInputProps) => {
  return (
    <div className="fm-D">
      <label htmlFor={name}>{label}</label>
      <Select
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        className="text-white"
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>

    // <div className="fm-n">
    //   <label htmlFor={name}>{label}</label>

    //   <select name={name} id={name} value={value} onChange={onChange}>
    //     {options.map((option) => (
    //       <option key={option} value={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default DropdownInput;
