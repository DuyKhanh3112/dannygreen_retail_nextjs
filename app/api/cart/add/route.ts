import { NextRequest, NextResponse } from "next/server";
import { addToCartApi } from "../../../../service/carts";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { partner_id, product_id, add_qty, order_id } = body;
    const response = await addToCartApi(partner_id, product_id, add_qty, order_id);
    console.log(response)
    return NextResponse.json({ data: response, success: true });
}