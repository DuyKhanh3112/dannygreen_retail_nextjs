import { CartProvider } from "../../../context/cart/cartContext"
import { ProductDetailProvider } from "../../../context/product/productDetailContext"

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProductDetailProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductDetailProvider>
    )
}