'use client'

import { createContext, useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hook";
import { IAuthData } from "../../interfaces/auth";
import { useRouter } from "next/navigation";
import { ICart } from "../../interfaces/cart";
import { addToCart, getCarts } from "../../store/cart/cart_slide";
import { IOrder } from "../../interfaces/order";
import LoadingPage from "../../components/loadingPage";

type CartContextType = {
    add_to_cart: (product_id: number, qty: number) => Promise<void>,
    load_cart: () => Promise<void>
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const carts = useAppSelector((state) => state.cart.data) as IOrder | undefined;
    const auth = useAppSelector((state) => state.auth.data) as IAuthData | undefined;
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false)


    const load_cart = async () => {
        setLoading(true)
        await dispatch(getCarts({ partner_id: auth.partner_id }));
        setLoading(false)
    }

    const add_to_cart = async (product_id: number, qty: number) => {
        if (auth) {
            setLoading(true)
            await dispatch(addToCart({
                partner_id: auth?.partner_id ? auth?.partner_id : 0,
                product_id: product_id,
                add_qty: qty,
                order_id: carts?.id ?? 0
            }))
            await load_cart()
            setLoading(false)
        } else {
            router.push('/login');
        }
    }

    const value = {
        add_to_cart,
        load_cart,
    };


    return (
        <CartContext.Provider value={value}>
            {loading ? <LoadingPage /> : children}
        </CartContext.Provider>
    );
};