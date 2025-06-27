import { NextRequest, NextResponse } from "next/server";
import { getProductApi } from "../../../service/products";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const response = await getProductApi();
    return NextResponse.json({ data: response, success: true });
}

export async function GET(req: NextRequest) {
    const response = await fetch("http://localhost:8069/shop", {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    // console.log(response)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data.)
    // });
    const data = await response.text()
    console.log(data)
    return NextResponse.json({ data: data, success: true });
}

