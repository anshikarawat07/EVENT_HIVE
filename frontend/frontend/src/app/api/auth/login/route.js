import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password, role } = await req.json(); // get role

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" });
        }

        // check role
        if (user.role !== role) {
            return NextResponse.json({ error: "Wrong role selected" });
        }

        // check password
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return NextResponse.json({ error: "Wrong password" });
        }

        // token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            "secretkey",
            { expiresIn: "1d" }
        );

        return NextResponse.json({
            message: "Login success",
            token,
            role: user.role,
            name: user.name,
            id: user.id   
        });

    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
