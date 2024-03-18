"use client";

import React from 'react'
import {User} from 'next-auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar } from './ui/avatar'
import UserAvatar from './UserAvatar'
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import Link from 'next/link';



const UserAccount = ({Session}:{Session:Session|null}) => {
  return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <UserAvatar name={Session?.user?.name} image={Session?.user?.image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>{Session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuLabel className="text-slate-600">{Session?.user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            
            <DropdownMenuItem asChild>
                <Link href={'/'}>
                    Feed
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
                <Link href={'/fetch/create'}>
                    Create Community
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
                <Link href={'/settings'}>
                    Settings
                </Link>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator/>

            <DropdownMenuItem className='cursor-pointer' onClick={()=>signOut()}>SignOut</DropdownMenuItem>



            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccount