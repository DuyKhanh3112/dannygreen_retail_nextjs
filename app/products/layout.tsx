import { AuthProvider } from "../../context/auth/authContext"
import { ProductProvider } from "../../context/product/productContext"


export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}