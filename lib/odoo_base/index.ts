export interface OdooConfig {
    database?: string;
    username?: string;
    password?: string;
    sid?: string;
    server?: string;
}

export interface RequestParams {
    model: string;
    method: string;
    args?: any[];
    kwargs?: Record<string, any>;
}

class Odoo {
    database?: string;
    username?: string;
    password?: string;
    sid?: string;
    server: string;
    private context: Record<string, any> = {};
    private cookie?: string;

    constructor(config: OdooConfig) {
        this.database = process.env.NEXT_PUBLIC_ODOO_DB;
        this.username = config.username || undefined;
        this.password = config.password || undefined;
        this.sid = config.sid || undefined;
        this.server = process.env.NEXT_PUBLIC_ODOO_URL;
    }

    // async getDatabases(): Promise<any> {
    //     const url = `${this.server}/web/database/list`;

    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({}),
    //         });

    //         const responseJson = await response.json();

    //         if (responseJson.error) return { success: false, error: responseJson.error };
    //         return { success: true, data: responseJson.result };
    //     } catch (error) {
    //         return { success: false, error };
    //     }
    // }

    async connect(): Promise<any> {
        const params = {
            db: this.database,
            login: this.username,
            password: this.password,
        };

        const url = `${this.server}/web/session/authenticate`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ params }),
            });

            const responseJson = await response.json();
            if (responseJson.error) return { success: false, error: responseJson.error };

            this.sid = this._setCookieToSessionID(response.headers.get('set-cookie'));
            this.cookie = `session_id=${this.sid}`;
            this.context = responseJson.result.user_context;
            this.username = responseJson.result.username;
            return { success: true, data: responseJson.result, sid: this.sid };
        } catch (error) {
            return { success: false, error };
        }
    }

    async connectWithSid(): Promise<any> {
        const url = `${this.server}/web/session/get_session_info`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Openerp-Session-Id': this.sid || '',
                },
                body: JSON.stringify({}),
            });

            const responseJson = await response.json();
            if (responseJson.error) return { success: false, error: responseJson.error };

            this.context = responseJson.result.user_context;
            this.username = responseJson.result.username;
            return { success: true, data: responseJson.result };
        } catch (error) {
            return { success: false, error };
        }
    }

    async search(model: string, params: any, context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: 'search',
            args: [params.domain],
            kwargs: { context: { ...this.context, ...context } },
        });
    }

    async logout(): Promise<any> {
        const url = `${this.server}/web/session/destroy`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': this.cookie || '',
                },
                body: JSON.stringify({}),
            });

            const responseJson = await response.json();
            if (responseJson.error) return { success: false, error: responseJson.error };

            this.sid = undefined;
            this.cookie = undefined;
            this.context = {};
            this.username = undefined;
            return { success: true, message: 'Logged out successfully' };
        } catch (error) {
            return { success: false, error };
        }
    }

    async search_read(model: string, params: any, context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: 'search_read',
            args: [],
            kwargs: {
                context: { ...this.context, ...context },
                domain: params.domain,
                offset: params.offset,
                limit: params.limit,
                order: params.order,
                fields: params.fields,
            },
        });
    }

    async search_count(model: string, domain: any[], context?: Record<string, any>): Promise<number> {
        const response = await this._request('/web/dataset/call_kw', {
            model,
            method: 'search_count',
            args: [domain],
            kwargs: { context: { ...this.context, ...context } },
        });
        return response.success ? response.data : 0;
    }

    async create(model: string, params: any, context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: 'create',
            args: [params],
            kwargs: { context: { ...this.context, ...context } },
        });
    }

    async update(model: string, ids: number[], params: any, context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: 'write',
            args: [ids, params],
            kwargs: { context: { ...this.context, ...context } },
        });
    }

    async delete(model: string, ids: number[], context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: 'unlink',
            args: [ids],
            kwargs: { context: { ...this.context, ...context } },
        });
    }

    async call_method(model: string, method: string, params: any, context?: Record<string, any>): Promise<any> {
        return this._request('/web/dataset/call_kw', {
            model,
            method: method,
            args: params.args || [],
            kwargs: {
                context: { ...this.context, ...context },
                domain: params.domain,
                offset: params.offset,
                limit: params.limit,
                order: params.order,
                fields: params.fields,
            },
        });
    }

    private async _request(path: string, params: RequestParams): Promise<any> {
        const url = `${this.server}${path}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Openerp-Session-Id': this.sid || '',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: new Date().getTime(),
                    method: 'call',
                    params,
                }),
            });

            const responseJson = await response.json();
            if (responseJson.error) return { success: false, error: responseJson.error };
            return { success: true, data: responseJson.result };
        } catch (error) {
            return { success: false, error };
        }
    }

    private _setCookieToSessionID = (setCookie: string | null) => {
        if (setCookie && setCookie.includes("session_id") && setCookie !== null) {
            const match = setCookie?.match(/session_id=([^;]+)/);
            return match ? match[1] : "";
        }
        return "";
    }
}

export default Odoo;
