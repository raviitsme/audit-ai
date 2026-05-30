import { Input, SelectInputProps } from "../types/input";

export function TextInput({ placeholder, label, value, onChange }: Input) {
  return (
    // FIX: "w-full" add kiya taaki parent container ke hisab se stretch ho
    <div className="p-5 gap-2 w-full">
      {/* Label section */}
      <label htmlFor={label} className="font-bold text-sm uppercase">
        {label}
      </label>

      {/* Input section */}
      <input
        type="number"
        id={label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-8 border-b-2 border-black outline-none p-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export function SelectInput({
  label,
  name,
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    // FIX: "w-full" add kiya taaki flexbox me ye sikude nahi aur full width le
    <div className="p-5 w-full">
      {/* Label */}
      <label htmlFor={name} className="font-bold text-sm uppercase text-black">
        {label}
      </label>

      <div className="relative w-full">
        <select
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-10 border-b-2 border-black bg-transparent outline-none px-2 cursor-pointer appearance-none pr-8 font-medium"
        >
          <option value="" defaultChecked disabled>
            Choose an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}