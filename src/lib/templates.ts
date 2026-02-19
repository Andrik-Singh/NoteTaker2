import { academicTemplates } from "./client/subtemplates/academicTemplates";
import { buisnessTemplates } from "./client/subtemplates/businessTemplates";
import { collabTemplates } from "./client/subtemplates/collabTemplates";
import { creativeTemplates } from "./client/subtemplates/creativeTemplates";
import { personalTemplates } from "./client/subtemplates/personalTemplates";

export interface TemplateItem {
  title: string;
  description: string;
  subtitle: string; 
  initialContent: any; 
  imageUrl?:string;
}
interface TemplateCategory {
  category: string;
  icon?: string; 
  templates: TemplateItem[];
}
export const templateCategories: TemplateCategory[] = [
  buisnessTemplates,
  personalTemplates,
  academicTemplates,
  creativeTemplates,
  collabTemplates
];