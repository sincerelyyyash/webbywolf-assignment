// components/RequestQuoteForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../components/Input";
import Select from "../components/Select";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  timeFrame: z.string().min(1, "Time frame is required"),
  size: z.string().min(1, "Size is required"),
  quantity: z.string().min(1, "Quantity is required"),
  description: z.string().min(5, "Description is required"),
});

const RequestQuoteForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 w-full">
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl p-6 sm:p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-heading-1 font-bold text-center mb-10 sm:mb-16">REQUEST A QUOTE</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="Name" name="name" register={register} required error={errors.name?.message as string | undefined} />
            <Input label="E-mail" name="email" type="email" register={register} required error={errors.email?.message as string | undefined} />
            <Input label="Phone Number" name="phone" register={register} required error={errors.phone?.message as string | undefined} />
            <Select label="Time Frame" name="timeFrame" options={["1 Week", "2 Weeks", "1 Month"]} register={register} required error={errors.timeFrame?.message as string | undefined} />
            <Select label="Size" name="size" options={["Small", "Medium", "Large"]} register={register} required error={errors.size?.message as string | undefined} />
            <Select label="Quantity" name="quantity" options={["1", "5", "10", "50"]} register={register} required error={errors.quantity?.message as string | undefined} />
          </div>

          {/* Description */}
          <div className="w-full">
            <Input label="Please Describe Your Project" name="description" register={register} required error={errors.description?.message as string | undefined} />
          </div>

          {/* Terms & Conditions */}
          <p className="text-sm text-gray-500 text-center">
            By submitting this form you agree to our <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="w-full sm:w-1/2 lg:w-1/3 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteForm;
