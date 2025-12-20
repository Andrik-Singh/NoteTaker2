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
    <header className="flex mx-5 pt-4 justify-between items-center flex-row">

      <CommandSearch />
      {authData?.user ? (
        <div>
          <span>Welcome, {authData.user.email}</span>
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
