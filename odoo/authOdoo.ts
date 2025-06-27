// import { IAuthResponse } from "../interfaces/auth";
// import Odoo, { getOdoo } from "./odooClient";

import { IAuthResponse } from "../interfaces/auth";
import Odoo from "../lib/odoo_base";
import { getOdoo } from "./odooClient";


export const _saveSession = async (sid: string) => {
    const cookie = [

    ];
}
export const loginOdoo = async (uname: string, pword: string) => {
    const odoo = new Odoo({
        ...await getOdoo(),
        username: uname,
        password: pword,
    });
    const response: IAuthResponse = await odoo
        .connect()
        .then(async (response) => {
            if (response.success) {
                // await _saveSession(response?.sid ?? "");
                // await _saveDatabase(database);
                // await _saveServer(server);
            }
            return response;
        });

    if (response.success) {
        // const uid = response.data?.uid;
        // await _setupMobileToken(odoo, uid, token);
    }
    return response;
}


export const logoutOdoo = async (session_id: string) => {
    const odoo = new Odoo({
        ...await getOdoo(),
        sid: session_id,
    });
    const response: IAuthResponse = await odoo
        .logout()
        .then((response) => {
            return response;
        });

    if (response.success) {
        // await _saveSession("");
    }

    return response;
}