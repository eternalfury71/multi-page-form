import { create } from "zustand";

type FormDataState = {
  signUpInfo: {
    username: string;
    email: string;
    password: string;
  };
  additionalInfo: {
    name: string;
    city: string;
    age: string;
  };
  musicInfo: {
    singer: string;
    band: string;
  };
};

type FormDataActions = {
  setSignUpInfo: (data: FormDataState["signUpInfo"]) => void;
  setAdditionalInfo: (data: FormDataState["additionalInfo"]) => void;
  setMusicInfo: (data: FormDataState["musicInfo"]) => void;
  clearFormsData: () => void;
};
const initialState = {
  signUpInfo: { username: "", email: "", password: "" },
  additionalInfo: { name: "", city: "", age: "" },
  musicInfo: { singer: "", band: "" },
};

export const useFormStore = create<FormDataState & FormDataActions>((set) => ({
  ...initialState,
  setSignUpInfo: (data) => set({ signUpInfo: data }),
  setAdditionalInfo: (data) => set({ additionalInfo: data }),
  setMusicInfo: (data) => set({ musicInfo: data }),
  clearFormsData: () => set({ ...initialState }),
}));
