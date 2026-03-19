"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("student");

    const [msg, setMsg] = useState("");
    const [type, setType] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMsg("Passwords do not match");
            setType("error");
            return;
        }

        try {
            const res = await axios.post("/api/auth/register", {
                name,
                email,
                password,
                role,
            });

            if (res.data.message) {
                setMsg("Account created successfully ");
                setType("success");

                setTimeout(() => {
                    router.push("/login");
                }, 1500);
            } else {
                setMsg(res.data.error);
                setType("error");
            }
        } catch {
            setMsg("Signup failed. Try again.");
            setType("error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">

            <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden w-[900px]">

                {/* LEFT */}
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-12 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">EventHive</h1>
                    <p className="text-lg opacity-90">
                        Join EventHive and manage college events smartly.
                    </p>

                    <div className="mt-10 space-y-3 text-sm opacity-90">
                        <p>✔ Discover & register for events</p>
                        <p>✔ Manage clubs and activities</p>
                        <p>✔ Smart QR attendance system</p>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Start your EventHive journey today
                    </p>

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

                    <form onSubmit={handleSignup} className="space-y-5">

                        {/* ROLE */}
                        <div>
                            <label className="font-semibold text-gray-700">
                                Register as
                            </label>

                            <div className="flex gap-3 mt-2">
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

                        {/* NAME */}
                        <div>
                            <label className="font-semibold text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-2 border p-3 rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
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
                                placeholder="Enter password"
                                className="w-full mt-2 border p-3 rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* CONFIRM */}
                        <div>
                            <label className="font-semibold text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full mt-2 border p-3 rounded-lg text-gray-800 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?{" "}
                        <span
                            onClick={() => router.push("/login")}
                            className="text-teal-600 font-semibold cursor-pointer hover:underline"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
