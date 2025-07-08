import { usePathname, useRouter } from "next/navigation";
import { IAuthData } from "../interfaces/auth";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import { logoutUser } from "../store/auth/auth_slide";
import { ICart } from "../interfaces/cart";
import { getCarts } from "../store/cart/cart_slide";
import { IOrder } from "../interfaces/order";
import { useEffect, useState } from "react";

export default function Header() {
    const auth: IAuthData = useAppSelector((state) => state.auth.data);
    const carts = useAppSelector((state) => state.cart.data) as IOrder | undefined
    const dispatch = useAppDispatch();
    const router = useRouter()
    const pathname = usePathname();
    const [countCart, setCountCart] = useState(0)

    const handleLogout = async () => {
        await dispatch(logoutUser({ sid: auth.session_id ?? '' }));
        router.push('/');
    }
    useEffect(() => {
        let count = 0;
        if (carts && auth) {
            carts.order_line.map((item) => {
                count += item.product_uom_qty;
            })
        }
        setCountCart(count)
    }, [auth, carts])


    return (
        <div className="container-fluid header">
            <ul className="nav justify-content-between align-items-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <img src='/images/logo_dannygreen_biomarkt.png' width='100px' />
                    </a>
                </li>
                <li className="nav-item justify-content-center">
                    <a className={`nav-link ${pathname == '/' ? 'active' : ''}`} href="/">TRANG CHỦ</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${pathname == '/chain' ? 'active' : ''}`} href="/chain">HỆ THỐNG CHUỖI CỬA HÀNG</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${pathname == '/products' ? 'active' : ''}`} href="/products">SẢN PHẨM & DỊCH VỤ</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${pathname == '/' ? 'news' : ''}`} href="/news">TIN TỨC</a>
                </li>
                {/* <li className="nav-item">
                    <div className="d-flex align-items-center contact-info-color">
                        <i className="fa fa-phone fs-3 icon-spacing"></i>
                        <div>
                            <div className="hotline-label">HOTLINE</div>
                            <div className="contact-text">0901 277 297</div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="d-flex align-items-center contact-info-color">
                        <i className="fa fa-envelope-o fs-3 icon-spacing"></i>
                        <div>
                            <div className="hotline-label">GMAIL</div>
                            <div className="contact-text">ecom.biomarkt@dannygreenretail.com.vn</div>
                        </div>
                    </div>
                </li> */}
                {auth ?
                    (
                        <li className="nav-item row">
                            <a className="nav-link" href="/cart">
                                {/* <a className="nav-link" onClick={async () => {
                                await getDataCart()
                                console.log('done')
                            }}> */}

                                <div className="d-flex align-items-center">

                                    <i className="fa fa-shopping-cart" style={{ fontSize: 25 }}></i>
                                    {countCart > 0 && <sup style={{ fontSize: 16 }}>{countCart}</sup>}
                                    {/* {(carts && carts.length > 0) && <sup style={{ fontSize: 16 }}>{carts.length}</sup>} */}

                                </div>
                            </a>
                            <div>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {auth.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                                </div>
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <button
                                className="btn btn-info"
                                onClick={() => {
                                    router.push('/login')
                                }}
                            >Login</button>
                        </li>
                    )}
            </ul>
        </div>
    )
}