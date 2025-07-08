'use client';
import CartItem from "../../components/cart_item";
import { useCartContext } from "../../context/cart/cartContext";
import { IOrder } from "../../interfaces/order"
import { IProduct } from "../../interfaces/product";
import { useAppSelector } from "../../lib/hook"
import { formatCurrency } from "../../utils/tool";

export default function CartPage() {
    const carts = useAppSelector((state) => state.cart.data) as IOrder | undefined
    const products = useAppSelector((state) => state.product.data) as IProduct[] | undefined
    const { add_to_cart,
        change_cart, } = useCartContext()

    return (
        <div className="container">
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>ProductName</th>
                        <th>price</th>
                        <th>quanity</th>
                        <th>total</th>
                    </tr>
                </thead>

                <tbody>

                </tbody> */}
            {/* </table> */}
            <div className="row cart-header">
                <div className="col-5"></div>
                <div className="col-2">Giá sản phẩm</div>
                <div className="col-3">Số lượng</div>
                <div className="col-2">Thành tiền</div>
            </div>
            {
                carts?.order_line.map((item) => {
                    const productItem = products?.find((p) => p.id == item.product_id)
                    return (
                        <CartItem key={item.id.toString()}
                            order_line={item}
                            product={productItem}
                            updatecart={change_cart}
                        />
                    )
                })
            }
            {carts?.order_line.length > 0 && (
                <> <div className="container row my-2" >
                    <div className="col-8">
                    </div>
                    <div className="col-4 row text-center justify-content-between align-items-center">
                        <h2>Tổng: </h2>
                        <h1>{formatCurrency(carts.amount_total)}</h1>
                    </div>
                </div>
                    <div className="container row my-5" >
                        <div className="col-8"></div>
                        <div className="col-4">
                            <button className="col-12 btn btn-danger">
                                <span className="fa fa-money"></span> Thanh toán
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div >
    )
}