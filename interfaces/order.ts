export interface IOrderLine {
    id: number;
    product_id: number;
    product_name: string;
    product_uom_qty: number;
    price_unit: number;
    line_amount_total: number;
    price_total: number;
    order_id: number;
}

export interface IOrder {
    id: number;
    name: string;
    partner_id: number;
    amount_total: number;
    order_line: IOrderLine[]
}