import { ChangeEvent, FormEvent } from "react";
import { useFormStore } from "../store/store";
import { CustomInput } from "../../shared/CustomInput";
import { handleInputChange } from "./hooks";

export function SignUpInfo({ showNextForm }: { showNextForm: () => void }) {
  const { signUpInfo, setSignUpInfo } = useFormStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, signUpInfo, setSignUpInfo);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(signUpInfo).every((val) => val);
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
        name="username"
        value={signUpInfo.username}
        placeholder="Enter your username"
        autoFocus
        onChange={handleChange}
      />
      <CustomInput
        type="email"
        name="email"
        value={signUpInfo.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <CustomInput
        type="password"
        name="password"
        value={signUpInfo.password}
        placeholder="Create Password"
        onChange={handleChange}
      />
      <div className="flex justify-center">
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
