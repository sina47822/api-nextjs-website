// pages/signup.tsx
'use client';
import { useState, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // TODO: Add your signup logic here (e.g., API call)
    console.log("Signing up with", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md p-8 space-y-6 border rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Signup
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login">
            <div className="text-blue-500 hover:underline">Log in</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
