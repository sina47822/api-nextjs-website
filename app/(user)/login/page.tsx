"use client"
import React from 'react'
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login: React.FC = () => {
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Add your authentication logic here (e.g., API call)
        console.log("Logging in with", { email, password });
      };
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center">
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md p-8 space-y-6 border rounded shadow"
        >
            <h2 className="text-2xl font-bold text-center">ورود</h2>
            <Input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            />
            <Input
            type="password"
            placeholder="پسورد"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            />
            <Button type="submit" className="w-full">
            ورود
            </Button>
            <p className="text-center text-sm">
            آیا قبلا ثبت نام نکرده اید؟{" "}
            <Link href="/signup">
                <div className="text-blue-500 hover:underline">ثبت نام</div>
            </Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default Login
