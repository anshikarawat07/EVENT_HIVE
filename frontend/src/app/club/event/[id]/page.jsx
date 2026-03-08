"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EventControl({ params }) {
    const eventId = params.id;

    const [event, setEvent] = useState(null);
    const [registrations, setRegistrations] = useState([]);
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get("/api/events/event-details?id=" + eventId);
        setEvent(res.data.event);
        setRegistrations(res.data.registrations);
        setAttendance(res.data.attendance);
    };

    return (
        <div className="flex min-h-screen bg-[#f4f7fb]">

            <Sidebar />

            <div className="flex-1">
                <Navbar />

                <div className="p-10">

                    {event && (
                        <>
                            <h1 className="text-3xl font-bold">{event.title}</h1>
                            <p className="text-gray-500 mb-6">{event.date} | {event.location}</p>
                        </>
                    )}

                    {/* registrations */}
                    <div className="bg-white p-6 rounded-2xl shadow mb-8">
                        <h2 className="text-xl font-bold mb-4">Registrations</h2>

                        {registrations.map((r) => (
                            <div key={r.id} className="border-b py-2">
                                {r.user.name} ({r.user.email})
                            </div>
                        ))}
                    </div>

                    {/* attendance */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-xl font-bold mb-4">Attendance</h2>

                        {attendance.map((a) => (
                            <div key={a.id} className="border-b py-2">
                                {a.user.name} - {a.status}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
