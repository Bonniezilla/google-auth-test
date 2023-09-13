export default async function apiExample() {
    const session = await fetch('localhost:3000/endpoints/session');

    return (
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-center justify-center w-full">
                <h1>Session Object: </h1>
                    <div div className="flex w-3/5 bg-slate-500/20 p-6 shadow-black/50
                    shadow-md rounded-md"
                    >
                        <pre className="text-black/70">{JSON.stringify({object: ""}, null, "\t")}</pre>
                    </div>
            </div>
        </main >
    )
}