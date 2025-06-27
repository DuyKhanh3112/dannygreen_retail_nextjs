export interface IAuthResponse {
    success: boolean;
    data?: any;
    sid?: string;
    error?: any;
    message?: string;
};
export interface IAuthData {
    session_id: string;
    uid: number;
    username: string;
    name: string;
    company_id: number;
    company_ids: number[];
    employee_id: number;
    employee_ids: number[];
    partner_id: number;
    fullData?: any;
}