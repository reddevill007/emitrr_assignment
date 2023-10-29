"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email and Password are required");
            return;
        }
        try {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: true,
                callbackUrl: "/"
            })

            if (!res) {
                return;
            }

        } catch (error) {
            console.log(error);
            toast.error("Enter right credentials")
        }
    }
    return (
        <section className="flex items-center justify-center w-full h-screen z-100 fixed top-0 left-0 bg-white">
            <div className="flex flex-col w-[500px] p-10 gap-10">
                <h1>Login </h1>
                <Input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <Button className="border rounded-[10px]" onClick={handleLogin}>Login</Button>
            </div>
        </section>
    )
}

export default LoginPage