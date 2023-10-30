"use client"

import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getFirstLetters } from "@/lib/utils";
import Link from 'next/link';
import { ColorRing } from "react-loader-spinner";

const Navbar = () => {
    const { status, data } = useSession();
    return (
        <nav className='fixed top-0 left-0 w-full h-16 flex justify-between items-center bg-white px-10'>
            <Link href="/">
                <img src="/logo.jpg" className="h-14 w-14" alt="" />
            </Link>

            {status === "unauthenticated" && <Link href="/login">Login</Link>}
            {status === "loading" && <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#000']}
            />}
            {status === "authenticated" && (
                <>
                    <Avatar className="cursor-pointer border" onClick={() => signOut()}>
                        <AvatarFallback>{getFirstLetters(data.user.name)}</AvatarFallback>
                    </Avatar>
                </>)
            }
        </nav>
    )
}

export default Navbar