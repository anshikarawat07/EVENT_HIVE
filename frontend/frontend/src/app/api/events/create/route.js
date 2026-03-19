import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { title, description, date, location, createdBy } = await req.json();

        const event = await prisma.event.create({
            data: {
                title,
                description,
                date,
                location,
                createdBy,
                status: "pending",
            },
        });

        return NextResponse.json({ message: "Event created", event });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
