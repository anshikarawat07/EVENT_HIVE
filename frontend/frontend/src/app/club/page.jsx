
"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";

export default function ClubDashboard() {
    const router = useRouter();

    return (
        <div className="flex min-h-screen bg-[#f4f7fb]">

            <Sidebar />
            <div className="flex-1">
                <Navbar />

                <div className="p-10">
                    <h1 className="text-3xl font-bold text-gray-800">Club Dashboard</h1>
                    <p className="text-gray-500">Manage your events</p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                        <div
                            onClick={() => router.push("/club/create-event")}
                            className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-xl"
                        >
                            <h2 className="text-xl font-bold text-teal-600">Create Event</h2>
                            <p className="text-gray-500 text-sm">Create new event</p>
                        </div>

                        <div
                            onClick={() => router.push("/club/manage-events")}
                            className="bg-white p-6 rounded-2xl shadow cursor-pointer hover:shadow-xl"
                        >
                            <h2 className="text-xl font-bold text-purple-600">Manage Events</h2>
                            <p className="text-gray-500 text-sm">View all events</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
