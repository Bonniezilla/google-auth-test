import "./globals.css";

import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-4">
      <h1 className="font-bold">Google Auth Test</h1>
      <SignInButton />
    </div>
  )
}
