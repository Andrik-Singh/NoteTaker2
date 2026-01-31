export const revalidate = 0;
export const dynamic = "force-dynamic";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import CommandSearch from "./CommandSearch";
import ThemeChanger from "./ThemeChanger";
import SignOutButton from "./auth/SignOutButton";
import AvatarDropDown from "./auth/AvatarDropDown";

const NavBar = async () => {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground/90"
        >
          notes
        </Link>
        <div className="hidden md:flex flex-1 justify-center">
          <div className="w-full max-w-md">
            <CommandSearch />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="md:hidden">
            <CommandSearch />
          </div>
          {authData?.user && (
            <AvatarDropDown user={
              {
                name: authData.user.name,
                email: authData.user.email,
                image: authData.user.image,
              }
            }></AvatarDropDown>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
