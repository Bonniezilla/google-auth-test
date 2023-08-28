import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/signin",
    },
};

const handler = NextAuth(authOption, {
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };