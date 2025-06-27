import Odoo from "../lib/odoo_base";
import { getOdoo } from "../odoo/odooClient";

const connectOdoo = async () => {
    const odoo = new Odoo({
        ...await getOdoo(),
        username: process.env.NEXT_PUBLIC_ODOO_USERNAME || "",
        password: process.env.NEXT_PUBLIC_ODOO_PASSWORD || "",
    });
}

export const getProductApi = async (page: number = 0) => {

    const api = `/api/products`;
    const server = process.env.NEXT_PUBLIC_ODOO_URL;
    try {
        const response = await fetch(`${server}${api}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page: page

            })
        });
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
