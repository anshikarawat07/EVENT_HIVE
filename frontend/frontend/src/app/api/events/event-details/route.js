import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    const event = await prisma.event.findUnique({
        where: { id },
    });

    const registrations = await prisma.registration.findMany({
        where: { eventId: id },
        include: { user: true },
    });

    const attendance = await prisma.attendance.findMany({
        where: { eventId: id },
        include: { user: true },
    });

    return NextResponse.json({
        event,
        registrations,
        attendance,
    });
}
