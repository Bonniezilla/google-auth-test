"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
    const { data: session } = useSession();
    return (
        <div className="">
            {session ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <button className="shadow-sm shadow-black/50 rounded-sm p-2 h-12 
                    text-gray-600 hover:text-black duration-300 hover:tracking-widest"
                        type="button"
                        onClick={() => signOut("google")}
                    >
                        Sign Out
                    </button>
                    <h1 className="font-bold">{session.user.name}</h1>
                    <img className="shadow-1 shadow-md shadow-gray-600 border-2 
                    rounded-full border-gray-800"
                        src={session.user.image}
                    ></img>
                    <p>Email: <span className="font-bold">{session.user.email}</span></p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                    <button className="shadow-sm shadow-black/50 rounded-sm p-2 h-12 
                    text-gray-600 hover:text-black duration-300 hover:tracking-widest"
                        type="button"
                        onClick={() => signIn("google")}
                    >
                        Continue with google
                    </button>
                </div>
            )}

        </div>
    )
}

module.exports = SignInButton;