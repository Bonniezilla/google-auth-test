import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export default async function GET(req) {
    const session = await getServerSession(req, res, authOptions);
    return NextResponse.send(JSON.stringify(session, null, 2));
}