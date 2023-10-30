"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { toast } from "sonner";

const LoginPage = ({ searchParams }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const { error } = searchParams;

    const handleLogin = async () => {
        setLoading(true)
        if (!email || !password) {
            toast.error("Email and Password are required");
            setLoading(false)
            return;
        }
        try {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: true,
                callbackUrl: "/"
            })

            console.log(res);

            if (!res) {
                return;
            }

        } catch (error) {
            console.log(error);
            toast.error("Enter right credentials")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="flex items-center justify-center w-full h-screen z-100 fixed top-0 left-0 bg-white">
            <div className="flex flex-col w-[500px] p-10 gap-10">
                <h1>Login </h1>
                {error === "CredentialsSignin" && <p className="underline underline-offset-2 text-red-500">Please Enter Correct Credentals</p>}
                <Input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <Button className="border rounded-[10px]" onClick={handleLogin}>
                    {loading ? <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        wrapperClass="blocks-wrapper"
                        colors={['#000']}
                    /> : "SignIn"}
                </Button>
                <Link href="/register" className="underline underline-offset-2 text-center">Don't have an account Signup</Link>
            </div>
        </section>
    )
}

export default LoginPage