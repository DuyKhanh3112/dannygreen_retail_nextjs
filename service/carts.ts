export const getCartApi = async () => {

    const api = `/api/carts`;
    const server = process.env.NEXT_PUBLIC_ODOO_URL;
    try {
        const response = await fetch(`${server}${api}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const addToCartApi = async (partner_id: number, product_id: number, add_qty: number, set_qty: number,) => {
    const api = `/api/cart/update`;
    const server = process.env.NEXT_PUBLIC_ODOO_URL;
    try {
        const response = await fetch(`${server}${api}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'partner_id': partner_id,
                'product_id': product_id,
                'add_qty': add_qty,
                'set_qty': set_qty,
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}