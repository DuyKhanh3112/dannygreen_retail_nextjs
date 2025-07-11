'use client'

import { createContext, useContext, useState } from "react";
import { useAppSelector } from "../../lib/hook";
import { RootState } from "../../store";
import { IAuthData } from "../../interfaces/auth";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "../../interfaces/product";

type ProductDetailContextType = {
    product: IProduct,
    imageSrc: string,
    add_to_cart: () => void,
    to_back: () => void
}


const ProductDetailContext = createContext<ProductDetailContextType | undefined>(undefined);

export const useProductDetailContext = (): ProductDetailContextType => {
    const context = useContext(ProductDetailContext);
    if (context === undefined) {
        throw new Error('useProductDetailContext must be used within a ProductDetailProvider');
    }
    return context;
};

interface ProductDetailProviderProps {
    children: React.ReactNode;
}

export const ProductDetailProvider: React.FC<ProductDetailProviderProps> = ({ children }) => {
    const auth = useAppSelector((state: RootState) => state.auth.data) as IAuthData | undefined
    const params = useParams();
    const slug = params.slug as string;
    const defaut_code = parseInt(slug.split('-')[0]);
    const router = useRouter();


    const all_product = useAppSelector((state) => state.product.data) as IProduct[];
    const [product, setProduct] = useState<IProduct | undefined>(all_product?.find((p) => p.default_code === defaut_code.toString()));
    const imageSrc = product?.image ? `data:image/png;base64,${product.image}` : '/images/logo_dannygreen_biomarkt.png';

    const add_to_cart = () => {
        if (auth) {
            console.log(1)
        } else {
            router.push('/login')
        }
    }
    const to_back = () => {
        router.back()
    }
    const value = {
        product,
        imageSrc,
        add_to_cart,
        to_back
    };


    return (
        <ProductDetailContext.Provider value={value}>
            {children}
        </ProductDetailContext.Provider>
    );
};