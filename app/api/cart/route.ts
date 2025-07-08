import { NextRequest, NextResponse } from "next/server";
import { getCartApi } from "../../../service/carts";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { partner_id } = body;
    const response = await getCartApi(partner_id);
    return NextResponse.json({ data: response, success: true });
}