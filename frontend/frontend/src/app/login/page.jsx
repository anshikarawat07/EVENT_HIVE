"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const [msg, setMsg] = useState("");
    const [type, setType] = useState(""); // success / error

    const handleLogin = async (e) => {
        e.preventDefault();
        setMsg("");

        try {
            const res = await axios.post("/api/auth/login", {
                email,
                password,
                role,
            });

            if (res.data.token) {
                setMsg("Login successful ");
                setType("success");
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("id", res.data.id);

                setTimeout(() => {
                    if (res.data.token) {

                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("role", res.data.role);
                        localStorage.setItem("name", res.data.name);

                        if (res.data.role === "student") {
                            router.push("/student");
                        }
                        else if (res.data.role === "teacher") {
                            router.push("/teacher");
                        }
                        else if (res.data.role === "club" || res.data.role === "admin") {
                            router.push("/club");
                        }

                    }

                }, 1200);
            } else {
                setMsg(res.data.error || "Invalid credentials");
                setType("error");
            }
        } catch {
            setMsg("User not found or wrong details");
            setType("error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">

            <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden w-[900px]">

                {/* LEFT PANEL */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-12 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">EventHive</h1>
                    <p className="text-lg opacity-90">
                        Smart College Event Management Platform for students,
                        teachers and clubs.
                    </p>

                    <div className="mt-10 space-y-3 text-sm opacity-90">
                        <p>✔ Manage college events easily</p>
                        <p>✔ Register & track participation</p>
                        <p>✔ QR based attendance system</p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Login Account
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Welcome back! Please enter your details.
                    </p>

                    {/* MESSAGE */}
                    {msg && (
                        <div
                            className={`mb-4 p-3 rounded-lg text-sm font-medium border
              ${type === "success"
                                    ? "bg-green-100 text-green-700 border-green-300"
                                    : "bg-red-100 text-red-700 border-red-300"
                                }`}
                        >
                            {msg}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* ROLE */}
                        <div>
                            <label className="font-semibold text-gray-700">Login as</label>

                            <div className="flex gap-3 mt-3">
                                {["student", "teacher", "club"].map((r) => (
                                    <button
                                        key={r}
                                        type="button"
                                        onClick={() => setRole(r)}
                                        className={`flex-1 py-2 rounded-lg border font-medium transition
                    ${role === r
                                                ? "bg-teal-600 text-white border-teal-600"
                                                : "bg-white text-gray-700 hover:bg-teal-50"
                                            }`}
                                    >
                                        {r.charAt(0).toUpperCase() + r.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 border p-3 rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full mt-2 border p-3 rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition">
                            Login
                        </button>
                    </form>

                    {/* SIGNUP */}
                    <p className="text-center mt-6 text-gray-600">
    Don’t have an account?{" "}
    <span
        onClick={() => router.push("/signup")}
        className="text-teal-600 font-semibold cursor-pointer hover:underline"
    >
        Signup
    </span>
</p>

<p
    onClick={() => router.push("/")}
    className="text-center mt-3 text-gray-500 cursor-pointer hover:text-teal-600 hover:underline"
>
    ← Back to Home
</p>
                </div>
            </div>
        </div>
    );
}
