import BlankNote from "@/components/newNote/blankNote";
import BuisnessTemplateSection from "@/components/newNote/BuisnessTemplateSection";
import ChooseSection from "@/components/newNote/ChooseSection";
import RecentTemplates from "@/components/newNote/RecentTemplates";
import TemplateSection from "@/components/newNote/TemplateSection";
import { auth } from "@/lib/auth";
import { History } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const page = async () => {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  if (!authData) {
    redirect("/sign-in");
  }
  return (
    <div className="my-5 md:px-10 px-3">
      <header className="space-y-3 my-2">
        <h1 className="text-3xl font-bold">New Document</h1>
        <h4 className="text-xl font-bold text-gray-500">
          KickStart your next big idea with our industry-leading frameworks
        </h4>
      </header>
      <section>
        <ChooseSection />
      </section>
      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined"><History size={15}/></span>
          Recent Templates
        </h3>
        <RecentTemplates id={authData?.user.id!} />
      </section>
      <TemplateSection/>
    </div>
  );
};

export default page;
