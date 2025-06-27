import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { fullname, phone, email, username, password } = body;
    console.log(body)
    return NextResponse.json({ data: {}, success: true }); // Return user data for further processing if needed
}