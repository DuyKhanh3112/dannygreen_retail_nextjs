import { CartProvider } from "../../context/cart/cartContext"


export default function CartLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <CartProvider>
                {children}
            </CartProvider>
        </div>
    )
}