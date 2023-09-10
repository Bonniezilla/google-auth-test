"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";

export default function SignInButton() {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <div>
                    <button className="shadow-sm shadow-black/50 rounded-sm p-2 h-12 
                    text-gray-600 hover:text-black hover:shadow-black/80 
                    duration-300 hover:tracking-widest hover:shadow-lg
                    bg-white flex gap-4 items-center"
                        type="button"
                        onClick={() => signOut("google")}
                    >
                    <Image 
                    className="shadow-1 shadow-md shadow-gray-600 border-2 
                    rounded-full border-gray-800"
                    src={session.user.image}
                    width={30}
                    height={10}
                    alt="Profile Image"
                    />
                        Sign Out
                    </button>
                </div>
            ) : (
                <>
                    <button className="shadow-sm shadow-black/50 rounded-sm p-2 h-12 
                    text-gray-600 hover:text-black duration-300 
                    hover:tracking-widest hover:shadow-black/80 hover:shadow-lg
                    bg-white"
                        type="button"
                        onClick={() => signIn("google")}
                    >
                        Continue with google
                    </button>
                </>
            )}
        </>
    )
}