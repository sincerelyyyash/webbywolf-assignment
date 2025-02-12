// components/ui/Select.tsx
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  required?: boolean;
  error?: string;
}

const Select: FC<SelectProps> = ({ label, name, options, register, required, error }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
      <select {...register(name, { required })} className="border rounded-md p-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Choose {label}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Select;
