'use client';

import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "../../../lib/hook";
import { IProduct } from "../../../interfaces/product";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/tool";
import { useProductDetailContext } from "../../../context/product/productDetailContext";
import { useCartContext } from "../../../context/cart/cartContext";

export default function PageProductDetail() {
    const {
        product,
        imageSrc,
        to_back
    } = useProductDetailContext();

    const {
        quantity,
        changeQuantity,
        change_cart,
        add_to_cart,
        load_cart,
    } = useCartContext();
    return (
        <section>
            <div className="container-fluid px-5 py-4">
                <div className="row">
                    <button className="btn btn-primary" onClick={to_back}>
                        <span className="fa fa-caret-left"></span>
                    </button>
                    <h2>[{product?.default_code}] {product?.name ?? ''}</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={imageSrc} width={'100%'} className="card-img" />
                    </div>
                    <div className="col-8 px-5">
                        <h2>[{product?.default_code}] {product?.name ?? ''}</h2>
                        <div className="py-2">
                            <h3>Giá: <span>{formatCurrency(product?.list_price)} / {product?.uom_id[1].toLowerCase()}</span></h3>
                        </div>
                        <div className="py-2">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Số lượng</span>
                                </div>
                                <input type="number" name="quantity" id="quantity"
                                    value={quantity}
                                    // defaultValue={quantity}
                                    onChange={(event) => {
                                        const value = Number(event.target.value);
                                        // console.log(value)
                                        changeQuantity(value);
                                    }}
                                    className="form-control col-3"

                                />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-4">
                                <button className="col-12 btn btn-warning" onClick={async () => {
                                    await add_to_cart(product?.id ?? 0)
                                }}>
                                    <span className="fa fa-cart-plus"></span> Thêm giỏ hàng
                                </button>
                            </div>
                            <div className="col-4">
                                <button className="col-12 btn btn-danger" onClick={async () => {
                                    await load_cart()
                                }}>
                                    <span className="fa fa-shopping-cart"></span> Mua hàng
                                </button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="container" />
            <div className="container">
                mô tả
            </div>
        </section>
    );
}