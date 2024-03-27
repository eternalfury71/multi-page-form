import { ChangeEvent, FormEvent } from "react";
import { useFormStore } from "../store/store";
import { CustomInput } from "../../shared/CustomInput";
import { handleInputChange } from "./hooks";

export function AdditionalForm({
  showNextForm,
  showPrevForm,
}: {
  showNextForm: () => void;
  showPrevForm: () => void;
}) {
  const { additionalInfo, setAdditionalInfo } = useFormStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, additionalInfo, setAdditionalInfo);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(additionalInfo).every((val) => val);
    if (isValid) {
      showNextForm();
    } else {
      alert("Complete Form");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white rounded-md p-6 shadow-md"
    >
      <CustomInput
        type="text"
        name="name"
        value={additionalInfo.name}
        placeholder="Enter your name"
        autoFocus
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        name="city"
        value={additionalInfo.city}
        placeholder="Enter your city"
        onChange={handleChange}
      />
      <CustomInput
        type="date"
        name="age"
        value={additionalInfo.age}
        placeholder="age"
        onChange={handleChange}
      />

      <div className="flex justify-center">
        <button
          type="button"
          className="m-2 hover:bg-green-600 text-white disabled:bg-gray-400  disabled:text-gray-500 cursor-pointer bg-green-500 min-w-24 py-4 rounded-lg"
          onClick={showPrevForm}
        >
          Previous
        </button>
        <button
          type="submit"
          className="m-2 hover:bg-green-600 text-white disabled:bg-gray-400  disabled:text-gray-500 cursor-pointer bg-green-500 min-w-24 py-4 rounded-lg"
        >
          Next
        </button>
      </div>
    </form>
  );
}
