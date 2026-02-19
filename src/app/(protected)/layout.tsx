import NavBar from "@/components/NavBar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const userData = await auth.api.getSession({
    headers: await headers(),
  });
  if (!userData) redirect("/sign-in");
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default ProtectedLayout;
