import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData, IAuthResponse } from '../../interfaces/auth'
import { getCompanyIdsFromData } from '../../utils/getCompanyIdsFromData'

interface ILoginParams {
    username: string,
    password: string,
}

interface IRegisterParams {
    fullname: string,
    phone: string,
    email: string,
    username: string,
    password: string,
}

interface AuthState {
    data: IAuthData | null
    loading: boolean
    error: string | null
}

export const initialStateAuth: AuthState = {
    data: null,
    loading: false,
    error: null,
}

// createAsyncThunk để gọi API async
export const loginUser = createAsyncThunk<IAuthData, ILoginParams, { rejectValue: string }>(
    'users/fetchUsers',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            let newData: IAuthData = null
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password }), // Thay đổi theo yêu cầu của bạn
            });
            const response: IAuthResponse = await res.json();
            if (!response.success) {
                return null;
            }
            newData = {
                session_id: response?.data.sid || "",
                uid: response?.data.data.uid,
                username: response?.data.data.username,
                name: response?.data.data.name,
                company_id: response?.data.data.company_id,
                company_ids: getCompanyIdsFromData(response.data.data),
                employee_id: response?.data.data.user_context?.employee_id,
                employee_ids: response?.data.data.user_context?.employee_ids,
                partner_id: response?.data.data.partner_id,
                fullData: response.data,
            };
            return newData;
        } catch (err) {
            console.log(err)
            return null;
        }
    }
)

export const logoutUser = createAsyncThunk<IAuthData, { sid: string }, { rejectValue: string }>(
    'users/logoutUser',
    async ({ sid }, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'sid': sid,
                }), // Thay đổi theo yêu cầu của bạn
            });
            const response: IAuthResponse = await res.json();
            if (!response.success) {
                return null;
            }
            return null;
        } catch (err) {
            console.log(err);
            return rejectWithValue('Logout failed');
        }
    })

export const registerUser = createAsyncThunk<void, IRegisterParams, { rejectValue: string }>(
    'users/registerUser',
    async ({ fullname, phone, email, username, password }, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'fullname': fullname,
                    'phone': phone,
                    'email': email,
                    'username': username,
                    'password': password
                }), // Thay đổi theo yêu cầu của bạn
            });
            const response: IAuthResponse = await res.json();
            if (!response.success) {
                return rejectWithValue(response.message || 'Register failed');
            }
            return;
        } catch (err) {
            console.error('Register error:', err);
            return rejectWithValue('Network error or server failure');
        }
    })

const userSlice = createSlice({
    name: 'users',
    initialState: initialStateAuth,
    reducers: {}, // có thể thêm reducers đồng bộ tại đây
    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                // if (action.payload) {
                //     state.data = action.payload
                // } else {
                //     state.error = 'Login failed'
                // }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
            })
            //login
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.data = action.payload
                } else {
                    state.error = 'Login failed'
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Login failed'
            })
            //logout
            .addCase(logoutUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false
                state.data = null // Xóa dữ liệu người dùng khi đăng xuất
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Logout failed'
            })
    },
})

export default userSlice.reducer
