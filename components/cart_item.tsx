'use client';
import { useState } from "react";
import { IOrderLine } from "../interfaces/order";
import { IProduct } from "../interfaces/product";
import { useAppSelector } from "../lib/hook";

export default function CartItem({ order_line, product, updatecart }:
    { order_line: IOrderLine, product: IProduct | null, updatecart: (product_id: number, qty: number) => Promise<void> }) {
    const imageSrc = product.image ? `data:image/png;base64,${product.image}` : 'images/logo_dannygreen_biomarkt.png';

    return (
        <div key={order_line.id.toString()} className="row cart-item">
            <div className="col-5">
                <div className="row">
                    <div className="col-5"><img src={imageSrc} className="col-12" /> </div>
                    <div className="col-7"><h4>{product.name}</h4> </div>
                </div>
            </div>
            <div className="col-2 text-center"> {order_line.price_unit}</div>
            <div className="col-3 row text-center justify-content-between align-items-center">
                <div className="col-2"></div>
                <div className="col-8 row justify-content-between align-items-center">
                    <span onClick={async () => {
                        await updatecart(product.id, -1);
                    }}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    {order_line.product_uom_qty}
                    <span onClick={async () => {
                        await updatecart(product.id, 1);
                    }}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="col-2 text-right">{order_line.price_total}</div>
        </div>
    )
}