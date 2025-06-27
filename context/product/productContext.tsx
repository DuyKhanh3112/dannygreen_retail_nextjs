'use client'

import { createContext, useContext, useState } from "react";
import { useAppSelector } from "../../lib/hook";
import { RootState } from "../../store";
import { IAuthData } from "../../interfaces/auth";
import { useParams, useRouter } from "next/navigation";
import { IProduct } from "../../interfaces/product";

type ProductContextType = {
    currentItems: IProduct[],
    currentPage: number,
    totalPages: number,
    backPage: () => void,
    nextPage: () => void
}


const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

interface ProductProviderProps {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const ITEMS_PER_PAGE = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const products = useAppSelector(state => state.product.data) || [];
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = products.slice(start, start + ITEMS_PER_PAGE);

    const backPage = () => {
        setCurrentPage(p => Math.max(p - 1, 1))
    }

    const nextPage = () => {
        setCurrentPage(p => Math.min(p + 1, totalPages))
    }


    const value = {
        currentItems,
        currentPage,
        totalPages,
        backPage,
        nextPage
    };


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};