"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f7fafc] text-gray-800 font-[Poppins] scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-teal-600 tracking-wide hover:scale-105 transition duration-300">
            EventHive
          </h1>

          <div className="hidden md:flex gap-10 font-medium text-gray-600">
            <a href="#home" className="hover:text-teal-600 transition duration-300">Home</a>
            <a href="#features" className="hover:text-teal-600 transition duration-300">Features</a>
            <a href="#how" className="hover:text-teal-600 transition duration-300">How it works</a>
            <a href="#contact" className="hover:text-teal-600 transition duration-300">Contact</a>
          </div>

          <div className="flex gap-3">
            <Link href="/login">
              <button className="px-5 py-2 border rounded-md hover:bg-gray-100 hover:scale-105 transition">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 hover:scale-105 transition shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Manage College Events
              <span className="text-teal-600 block mt-2">
                Smart & Simple Way
              </span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg max-w-lg leading-relaxed">
              EventHive helps students, clubs and admins manage college
              events, registrations and attendance in one modern interactive platform.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/login">
                <button className="px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 hover:scale-105 transition shadow-lg">
                  Enter Platform
                </button>
              </Link>

              <button className="px-8 py-3 border rounded-md hover:bg-gray-100 hover:scale-105 transition">
                View Demo
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6 animate-fadeIn">
            {[
              { num: "120+", text: "Events Hosted" },
              { num: "50+", text: "Active Clubs" },
              { num: "5K+", text: "Students" },
              { num: "QR", text: "Attendance" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="font-bold text-teal-600 text-xl">{item.num}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-16">
          Platform Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {[
            "Event Creation",
            "Student Registration",
            "QR Attendance",
          ].map((title, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border hover:shadow-xl hover:-translate-y-2 transition duration-300 bg-gradient-to-b from-white to-teal-50"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Smart and simple system designed for modern college events.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-24 bg-[#f0fdfa]">
        <h2 className="text-3xl font-bold text-center mb-16">
          How EventHive Works
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">

          {["Login", "Explore Events", "Participate"].map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-3xl font-bold text-teal-600">{i + 1}</div>
              <h3 className="font-semibold mt-3">{step}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Smooth and modern experience for all users.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600">eventhive@gmail.com</p>
        <p className="text-gray-600 mt-2">+91 98XXXXXXX</p>
        <p className="text-gray-600 mt-2">Your College Name</p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © 2026 EventHive — Smart College Event Platform
      </footer>

      {/* ===== CUSTOM ANIMATIONS ===== */}
      <style jsx global>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease;
        }
        @keyframes fadeInUp {
          from {opacity:0; transform:translateY(40px);}
          to {opacity:1; transform:translateY(0);}
        }
        @keyframes fadeIn {
          from {opacity:0;}
          to {opacity:1;}
        }
      `}</style>

    </main>
  );
}
