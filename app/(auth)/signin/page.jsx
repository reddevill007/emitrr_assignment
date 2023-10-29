"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const signInPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSignin = async () => {
        if (!email || !name || !password) {
            toast.error("All the feilds are required")
            return;
        }
        try {
            const res = await fetch(`/api/auth/register`, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });
            if (res.ok) {
                toast.success("user created");
                router.push("/login")
            }
            else {
                toast.error("user already exists");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-col w-[500px] p-10 gap-10">
                <h1>Signin </h1>
                <Input type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)} />
                <Input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <Button className="border rounded-[10px]" onClick={handleSignin}>Create account</Button>
            </div>
        </section>
    )
}

export default signInPage