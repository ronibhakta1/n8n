"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <>
        <div className="grid col-span-1 justify-center border p-10 m-20 gap-4">
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="mb-4 p-2 rounded border border-black"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="mb-4 p-2 rounded border border-black"
            />
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-primary-dark transition cusrsor-pointer" 
            onClick={() => signIn("credentials", { username, password, callbackUrl: "/playground" })}>Sign In</button>
        </div>
    </>
}