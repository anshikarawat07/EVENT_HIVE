import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const clubId = Number(searchParams.get("clubId"));

    const events = await prisma.event.findMany({
        where: { createdBy: clubId },
        orderBy: { id: "desc" }
    });

    return NextResponse.json(events);
}
