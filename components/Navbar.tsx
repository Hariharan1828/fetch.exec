import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { getServerSession } from 'next-auth'

import UserAccount from "./UserAccount";
import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.fetchLogo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Fetch.exec
          </p>
        </Link>
        {/* search bar */}

        {session?.user ?(
            <UserAccount Session={session}/>
          ):(
          <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>

        )}

        
      </div>
    </div>
  );
};

export default Navbar;
