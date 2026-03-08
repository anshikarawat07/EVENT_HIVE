"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        setName(localStorage.getItem("name") || "User");
        setRole(localStorage.getItem("role") || "");
    }, []);

    const logout = () => {
        localStorage.clear();
        router.push("/login");
    };

    return (
        <div className="w-full bg-white border-b px-12 py-5 flex justify-between items-center">

            {/* LEFT SIDE */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome, {name} 👋
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Manage and explore college events
                </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5">

                {/* role badge */}
                <div className="bg-teal-50 text-teal-600 px-4 py-1 rounded-full text-sm font-semibold capitalize">
                    {role}
                </div>

                {/* avatar */}
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {name.charAt(0).toUpperCase()}
                </div>

                {/* logout */}
                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
