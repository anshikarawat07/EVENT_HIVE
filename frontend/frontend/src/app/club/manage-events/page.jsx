"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageEvents() {

    const [events, setEvents] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const clubId = localStorage.getItem("userId");
        const res = await axios.get("/api/events/club-events?clubId=" + clubId);
        setEvents(res.data);
    };

    return (
        <div className="flex min-h-screen bg-[#f4f7fb]">

            <Sidebar />
            <div className="flex-1">
                <Navbar />

                <div className="p-10">
                    <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

                    <div className="grid md:grid-cols-3 gap-6">
                        {events.map(e => (
                            <div key={e.id}
                                onClick={() => router.push(`/club/event/${e.id}`)}
                                className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-xl">

                                <h2 className="text-xl font-bold text-teal-600">{e.title}</h2>
                                <p className="text-gray-500 text-sm">{e.date}</p>
                                <p className="text-xs mt-2">{e.status}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
 