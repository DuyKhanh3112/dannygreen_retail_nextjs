'use client';
import { useState } from 'react';
import ProductItem from '../../components/product_item';
import { useProductContext } from '../../context/product/productContext';
import { useAppDispatch } from '../../lib/hook';
import { getProducts } from '../../store/product/product_slide';



export default function ProductList() {

    const {
        currentItems,
        currentPage,
        totalPages,
        backPage,
        nextPage
    } = useProductContext()
    const dispatch = useAppDispatch()

    const [data, setData] = useState('')

    return (
        <div className="container-fluid mx-auto p-5">

            <ul className="row">
                {currentItems.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </ul>

            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={backPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Trang trước
                </button>

                <span>Trang {currentPage} / {totalPages}</span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Trang sau
                </button>
            </div>
        </div>
    );
}
