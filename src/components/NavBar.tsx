import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "./ui/button";
import SignOutButton from "./auth/SignOutButton";
import Link from "next/link";

const NavBar = async () => {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
        {authData 
        ?
        <SignOutButton></SignOutButton>
        : 
        <Link href="/sign-in">
            <Button>Sign In</Button>
        </Link> 
        }
    </div>
  );
};

export default NavBar;
