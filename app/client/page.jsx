"use client";

import { useSession } from "next-auth/react";

export default function clientPage() {
    const { data: session } = useSession();

    console.log(session);
    return (
        <main className="flex items-center justify-center h-screen flex-col text-center"
        >
            <h1 className="text-slate-950 text-3xl font-bold"
            >This page uses client rendering</h1>
            <p>{JSON.stringify(session)}</p>
        </main>
    )
}