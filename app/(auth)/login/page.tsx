"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });

        const data = await res.json();
        if(res.ok){
            router.push("/dashboard");
        } else {
            setError(data.message);
        }
    }

    return (
        
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 border rounded space-y-4"
      >
        <h2 className="text-xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          className="w-full p-2 border rounded"
          required
        />

        <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            className="w-full p-2 border rounded"
            required
        />

        <button className="w-full p-2 bg-blue-500 text-white rounded">
            Login
        </button>
      </form>
    </div>
    );

    

}