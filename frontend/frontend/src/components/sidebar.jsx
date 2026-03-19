"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const router = useRouter();
    const [role, setRole] = useState("");

    useEffect(() => {
        const r = localStorage.getItem("role");
        setRole(r);
    }, []);

    const Item = ({ text, link }) => (
        <div
            onClick={() => router.push(link)}
            className="px-4 py-3 rounded-xl cursor-pointer text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium transition-all duration-200"
        >
            {text}
        </div>
    );

    return (
        <div className="w-[250px] bg-white border-r min-h-screen p-6 flex flex-col justify-between">

            {/* LOGO */}
            <div>
                <h1
                    onClick={() => router.push("/")}
                    className="text-3xl font-bold text-teal-600 mb-12 cursor-pointer tracking-wide"
                >
                    EventHive
                </h1>

                {/* STUDENT */}
                {role === "student" && (
                    <div className="space-y-2">
                        <Item text="🏠 Home" link="/student" />
                        <Item text="📅 All Events" link="/student/events" />
                        <Item text="📝 My Registrations" link="/student/my-events" />
                        <Item text="🎓 Certificates" link="/student/certificates" />
                        <Item text="👤 Profile" link="/student/profile" />
                    </div>
                )}

                {/* TEACHER */}
                {role === "teacher" && (
                    <div className="space-y-2">
                        <Item text="📊 Overview" link="/teacher" />
                        <Item text="📅 All Events" link="/teacher/events" />
                        <Item text="📋 Registration List" link="/teacher/registrations" />
                        <Item text="📍 Attendance List" link="/teacher/attendance" />
                        <Item text="✅ Approve Events" link="/teacher/approve-events" />
                        <Item text="👤 Profile" link="/teacher/profile" />
                    </div>
                )}

                {/* CLUB */}
                {role === "club" && (
                    <div className="space-y-2">
                        <Item text="📊 Dashboard" link="/club" />
                        <Item text="➕ Create Event" link="/club/create-event" />
                        <Item text="🗂 Manage Events" link="/club/manage-events" />
                        <Item text="📋 Registrations" link="/club/registrations" />
                        <Item text="📍 Mark Attendance" link="/club/attendance" />
                        <Item text="📈 Reports" link="/club/reports" />
                        <Item text="👤 Profile" link="/club/profile" />
                    </div>
                )}
            </div>

            {/* FOOTER */}
            <p className="text-xs text-gray-400 mt-10">
                © 2026 EventHive
            </p>
        </div>
    );
}
