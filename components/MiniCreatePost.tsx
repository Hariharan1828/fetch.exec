"use client"

import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation"


interface MiniCreatePostProps {
    session :Session|null
}
const MiniCreatePost = ({ session }:{session:MiniCreatePostProps | null}) => {

    const router = useRouter();
    const pathname = usePathname();

  return (
    <li className="overflow-hidden rounded-md bg-white shadow">
        <div className="h-full px-6 py-4 sm:flex sm:justify-between gap-6">
            <div className="relative">
                UserAvatar
            </div>
        </div>
    </li>
  )
}

export default MiniCreatePost