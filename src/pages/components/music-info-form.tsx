import { ChangeEvent, FormEvent } from "react";
import { useFormStore } from "../store/store";
import { CustomInput } from "../../shared/CustomInput";
import { handleInputChange } from "./hooks";

export function MusicForm({
  showPrevForm,
  completeForms,
}: {
  showPrevForm?: () => void;
  completeForms: () => void;
}) {
  const { clearFormsData, musicInfo, setMusicInfo } = useFormStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, musicInfo, setMusicInfo);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(musicInfo).every((val) => val);
    if (isValid) {
      clearFormsData();
      completeForms();
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
        name="singer"
        value={musicInfo.singer}
        placeholder="Enter your favourite singer"
        autoFocus
        onChange={handleChange}
      />
      <CustomInput
        type="select"
        name="band"
        value={musicInfo.band}
        placeholder="Enter your favourite band"
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
          Submit
        </button>
      </div>
    </form>
  );
}
