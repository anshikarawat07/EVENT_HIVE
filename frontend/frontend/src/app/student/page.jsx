"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

export default function StudentDashboard() {
    const [name, setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#f4f7fb]">

            {/* sidebar */}
            <Sidebar />

            <div className="flex-1">

                {/* navbar */}
                <Navbar />

                <div className="p-10">

                    {/* PAGE TITLE */}
                    <h1 className="text-3xl font-bold text-gray-800">
                        Student Overview 🎓
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Welcome back {name}, explore campus events
                    </p>

                    {/* STATS */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p className="text-gray-500 text-sm">Upcoming Events</p>
                            <h2 className="text-3xl font-bold text-teal-600 mt-2">12</h2>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p className="text-gray-500 text-sm">My Registrations</p>
                            <h2 className="text-3xl font-bold text-purple-600 mt-2">5</h2>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow">
                            <p className="text-gray-500 text-sm">Certificates</p>
                            <h2 className="text-3xl font-bold text-orange-600 mt-2">2</h2>
                        </div>

                    </div>

                    {/* UPCOMING EVENTS PREVIEW */}
                    <h2 className="text-xl font-bold mt-12 mb-4 text-gray-800">
                        Upcoming Events
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="font-bold">Hackathon 2026</h3>
                            <p className="text-sm text-gray-500 mt-1">March 25 • Auditorium</p>
                            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                                View
                            </button>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="font-bold">Dance Fest</h3>
                            <p className="text-sm text-gray-500 mt-1">April 2 • Main Hall</p>
                            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                                View
                            </button>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="font-bold">Tech Talk</h3>
                            <p className="text-sm text-gray-500 mt-1">April 10 • Seminar Hall</p>
                            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                                View
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
