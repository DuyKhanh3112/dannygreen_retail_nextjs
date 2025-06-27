import Odoo, { OdooConfig } from "../lib/odoo_base";
import { getOdoo } from "./odooClient";


export const getProductOdoo = async (session_id: string, page: number = 0) => {
    const odoo = new Odoo({
        ...await getOdoo(),
        sid: session_id == '' ? '' : session_id,
        username: session_id == '' ? process.env.NEXT_PUBLIC_ODOO_USERNAME : undefined,
        password: session_id == '' ? process.env.NEXT_PUBLIC_ODOO_PASSWORD : undefined,
    });
    if (session_id == '') {
        await odoo.connect();
    }
    console.log(odoo)
    const limit = 20;
    const params = {
        domain: [
            ['available_in_pos', '=', true],
        ],
        fields: [
            'id',
            'name',
            'list_price',
            'image',
            'default_code',
        ],
        offset: (page - 1) * limit,
        limit: limit,
        order: 'name ASC',

    };
    const response = await odoo.search_read('product.product', params);
    return response;
};

export const countProductOdoo = async (session_id: string,) => {
    const odoo = new Odoo({
        ...await getOdoo(),
        sid: session_id,
    });

    const params = {
        domain: [
            ['available_in_pos', '=', true,]
        ],
    };
    const response = await odoo.search_read('product.product', params);
    return response;
};
