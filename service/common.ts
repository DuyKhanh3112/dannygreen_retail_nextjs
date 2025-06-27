
type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const call_api_odoo = async (api: string, method: MethodType, body?: any) => {
    const server = process.env.NEXT_PUBLIC_ODOO_URL;
    return await fetch(`${server}${api}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body ?? {})
    });
}