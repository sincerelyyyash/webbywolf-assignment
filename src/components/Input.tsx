// components/ui/Input.tsx
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: string;
}

const Input: FC<InputProps> = ({ label, name, type = "text", placeholder, register, required, error }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
      <input 
        type={type} 
        {...register(name, { required })} 
        placeholder={placeholder} 
        className="border rounded-md p-2 mt-1 outline-none"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
