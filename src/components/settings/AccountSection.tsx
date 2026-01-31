import { auth } from "@/lib/auth";
import SignOutButton from "../auth/SignOutButton";
import { headers } from "next/headers";

const AccountSection = async () => {
  const user=await auth.api.getSession({
    headers:await headers()
  })
  return (
    <section className="mt-10">
      <h3 className="text-md font-semibold uppercase tracking-wider dark:opacity-40 opacity-100">
        Account
      </h3>
      <div className="space-y-3 mt-3">
        <div className="flex justify-between items-center pl-3">
          <p className="text-sm font-normal dark:opacity-60 opacity-100">Email</p>
          <p className="text-sm font-normal">{user?.user.email}</p>
        </div>
        <div className="flex justify-between items-center pl-3">
          <p className="text-sm font-normal dark:opacity-60 opacity-100">Name</p>
          <p className="text-sm font-normal">{user?.user.name}</p>
        </div>
          <SignOutButton/>
      </div>
    </section>
  );
};

export default AccountSection;
