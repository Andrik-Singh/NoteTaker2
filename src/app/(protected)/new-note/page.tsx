
import ChooseSection from "@/components/newNote/ChooseSection";
import TemplateSection from "@/components/newNote/TemplateSection";
import { auth } from "@/lib/auth";
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
      <TemplateSection/>
    </div>
  );
};

export default page;
