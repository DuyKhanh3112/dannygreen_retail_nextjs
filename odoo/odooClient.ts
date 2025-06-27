import { OdooConfig } from "../lib/odoo_base";


type GetOdooType = {
    server?: string;
    database?: string;
}

export const getOdoo = async (data?: GetOdooType) => {
    const generalConfig: OdooConfig = {
        server: data?.server || process.env.NEXT_PUBLIC_ODOO_URL,
        database: data?.database || process.env.NEXT_PUBLIC_ODOO_DB,
    };
    return generalConfig;
};