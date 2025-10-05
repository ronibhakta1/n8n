import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username : { label: "Username", type: "text", placeholder: "RoniBhakta" },
                password :{ label: "Password", type: "password", placeholder: "123@!$$!jrse3" }
            },
            async authorize(credentials: any) {

                if (credentials) {
                    const username = credentials?.username;
                    const password = credentials?.password;
                    return {
                        id: "1",
                        name: username,
                    };
                }
                return null;
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks :{
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            try {
                const target = new URL(url, baseUrl);
                if (target.origin === baseUrl) return target.toString();
            } catch {
                /* noop */
            }
            if (url?.startsWith("/")) return `${baseUrl}${url}`;
            return baseUrl;
        },
    },
    pages : {
        signIn: '/signin',
    }
};

