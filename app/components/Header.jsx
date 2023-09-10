import Link from "next/link";
import SignInButton from "./SignInButton";

export default function Header() {
    return (
        <header
        className="h-20 p-4 fixed bg-slate-400/50 backdrop-blur-md w-screen flex items-center
        justify-end gap-4"
        >   
            <Link className="flex items-center justify-center p-4 text-slate-950/70
            bg-white shadow-black/50 shadow-md rounded-md h-12"
            href={"/api-example"}
            >
                Api
            </Link>
            <Link className="flex items-center justify-center p-4 text-slate-950/70
            bg-white shadow-black/50 shadow-md rounded-md h-12"
            href={"/client"}
            >
                Client
            </Link>
            <SignInButton />
        </header>
    )
}