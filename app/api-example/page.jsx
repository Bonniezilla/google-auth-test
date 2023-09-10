"use client";

import { useSession } from "next-auth/react";

export default function apiExample() {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-center justify-center w-full">
                <h1>Session Object: </h1>
                {!loading ? (
                    <div div className="flex h-40 w-3/5 bg-slate-500/20 p-6 shadow-black/50
                    shadow-md rounded-md"
                    >
                        <p className="text-black/70">{JSON.stringify(session)}</p>
                    </div>
                ) : (
                    <div className="flex h-40 w-3/5 bg-slate-950/50 p-6 shadow-black/50
                    shadow-md rounded-md animate-pulse">
                        <h1 className="text-white animate-pulse">
                            {
                                "{...}"
                            }
                        </h1>
                    </div>
                )
                }
            </div>
        </main >
    )
}