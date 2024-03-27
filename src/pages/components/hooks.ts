import { useFormStore } from "../store/store";

export const handleInputChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  state: T,
  setState: (data: any) => void
) => {
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
};

export const showAllData = () => {
  const { signUpInfo, musicInfo, additionalInfo } = useFormStore();
  return { signUpInfo, musicInfo, additionalInfo };
};
