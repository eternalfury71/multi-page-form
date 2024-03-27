import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

// TODO we can pass all input props
// TODO if we want custom label or no label
export function CustomInput(props: CustomInputProps) {
  const { className, ...rest } = props;

  return (
    <div className="mb-4">
      {props.name && (
        <label
          className="text-sm font-semibold capitalize"
          htmlFor={props.name}
        >
          {props.name}
        </label>
      )}
      <input
        {...rest}
        className={twMerge(
          "w-full border-4 border-gray-200 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-400",
          className
        )}
      />
    </div>
  );
}

// Input
// Label
// FormItem
