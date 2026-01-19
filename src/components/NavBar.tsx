export const revalidate = 0;
export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "./ui/button";
import SignOutButton from "./auth/SignOutButton";
import Link from "next/link";
import CommandSearch from "./CommandSearch";

const NavBar = async () => {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <header className="flex px-5 py-3 justify-between items-center flex-row border-b ">

      <CommandSearch />
      {authData?.user ? (
        <div>
          <SignOutButton></SignOutButton>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
