"use client";
import TemplateButton from "./TemplateButton";

const ChooseSection = () => {
  return (
    <nav className="flex flex-wrap px-3 md:gap-2 gap-5 overflow-x-auto pb-6 mb-10 no-scrollbar border-b py-5 border-gray-100 dark:border-gray-800">
      <TemplateButton value="All Template" />
      <TemplateButton value="Business" />
      <TemplateButton value="Academic" />
      <TemplateButton value="Creative" />
      <TemplateButton value="Personal" />
      <TemplateButton value="Collaborative" />
    </nav>
  );
};

export default ChooseSection;
