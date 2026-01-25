import { BriefcaseBusiness } from "lucide-react";
import BlankNote from "./blankNote";

const BuisnessTemplateSection = () => {
  return (
    <div>
      <h2 className="flex items-center text-2xl font-bold">
        <BriefcaseBusiness color="blue" />
        Business Templates
      </h2>
      <div className="grid grid-cols-3 gap-10">
        <BlankNote></BlankNote>
      </div>
    </div>
  );
};

export default BuisnessTemplateSection;
