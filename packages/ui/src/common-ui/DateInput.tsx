import { DateInput as HeroDateInput } from "@heroui/date-input";
import { CalendarDate } from "@internationalized/date";

interface DateInputProps {
  name: string;
  label: string;
  value: any;
  onChange: (event: any) => void;
  placeholder: string;
}

const DateInput = ({
  name,
  label,
  value,
  onChange,
  placeholder,
}: DateInputProps) => {
  return (
    // <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
    //   <HeroDateInput
    //     className="max-w-sm"
    //     label={label}
    //     placeholderValue={new CalendarDate(1995, 11, 6)}
    //     name={name}
    //     value={value}
    //     onChange={onChange}
    //   />
    // </div>

    <div className="fm-D">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
