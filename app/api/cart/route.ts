import { NextRequest, NextResponse } from "next/server";
import { getCartApi } from "../../../service/carts";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const response = await getCartApi();
    return NextResponse.json({ data: response, success: true });
}