export const getCartApi = async (partner_id: number) => {

    const api = `/api/getCarts`;
    const server = process.env.NEXT_PUBLIC_ODOO_URL;
    console.log(`${server}${api}`)
    try {
        const response = await fetch(`${server}${api}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'partner_id': partner_id
            })
        });
        // console.log(response)
        // console.log(partner_id)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const addToCartApi = async (partner_id: number, product_id: number, add_qty: number, order_id: number,) => {
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
                'order_id': order_id
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}