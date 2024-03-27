import { useState } from "react";
import { MusicForm } from "../pages/components/music-info-form";
import { AdditionalForm } from "../pages/components/personal-info-form";
import { SignUpInfo } from "../pages/components/signup-form";
import { showAllData } from "../pages/components/hooks";

const formsData = [
  {
    title: "Sing Up",
    component: SignUpInfo,
    completed: false,
  },
  {
    title: "Personal Info",
    component: AdditionalForm,
    completed: false,
  },
  {
    title: "Music Preference",
    component: MusicForm,
    completed: true,
  },
];

export function Layout() {
  const [page, setPage] = useState(0);

  const FormComponent = formsData[page].component;
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => prev - 1);
  const allFormsData = showAllData();
  const completeForms = () => {
    alert(`Forms data:\n${JSON.stringify(allFormsData, null, 2)}`);
    setPage(0);
  };

  return (
    <div className="max-w-lg flex flex-col items-center gap-6 bg-slate-500 py-14 mx-auto mt-12 rounded-lg">
      <div>
        <h1 className="text-3xl font-semibold text-white">
          {formsData[page].title}
        </h1>
      </div>
      <FormComponent
        showNextForm={handleNext}
        showPrevForm={handlePrev}
        completeForms={completeForms}
      />
    </div>
  );
}
