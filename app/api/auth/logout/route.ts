import { NextRequest, NextResponse } from "next/server";
import { logoutOdoo } from "../../../../odoo/authOdoo";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { sid } = body;
    const response = await logoutOdoo(sid);
    if (!response.success) {
        return NextResponse.json({ error: "Login failed", status: 500, success: false });
    }
    return NextResponse.json({ data: response, success: true }); // Return user data for further processing if needed
}