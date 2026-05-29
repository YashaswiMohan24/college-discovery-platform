"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSignup(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const response = await fetch(
      "/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    if (response.ok) {
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border rounded-xl mb-4"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-xl mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 border rounded-xl mb-6"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-4 rounded-xl font-semibold"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}