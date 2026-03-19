"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import axios from "axios";

export default function CreateEvent() {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const [location,setLocation]=useState("");
  const [msg,setMsg]=useState("");

  const handleCreate=async(e)=>{
    e.preventDefault();

    const clubId = localStorage.getItem("userId");

    const res = await axios.post("/api/events/create",{
      title,
      description,
      date,
      location,
      createdBy:Number(clubId)
    });

    if(res.data.message){
      setMsg("Event created & sent for approval");
      setTitle(""); setDescription(""); setDate(""); setLocation("");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f4f7fb]">

      <Sidebar/>
      <div className="flex-1">
        <Navbar/>

        <div className="p-10 max-w-xl">
          <h1 className="text-3xl font-bold mb-6">Create Event</h1>

          {msg && <div className="bg-green-100 p-3 mb-4">{msg}</div>}

          <form onSubmit={handleCreate} className="bg-white p-6 rounded-2xl shadow space-y-4">

            <input className="w-full border p-3 rounded" placeholder="Title"
              value={title} onChange={e=>setTitle(e.target.value)} required/>

            <textarea className="w-full border p-3 rounded" placeholder="Description"
              value={description} onChange={e=>setDescription(e.target.value)} required/>

            <input type="date" className="w-full border p-3 rounded"
              value={date} onChange={e=>setDate(e.target.value)} required/>

            <input className="w-full border p-3 rounded" placeholder="Location"
              value={location} onChange={e=>setLocation(e.target.value)} required/>

            <button className="bg-teal-600 text-white px-6 py-3 rounded w-full">
              Create Event
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
