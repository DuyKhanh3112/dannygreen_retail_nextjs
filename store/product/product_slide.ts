import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces/product'

interface ProductState {
    data: IProduct[] | null
    loading: boolean
    error: string | null,
    page?: number,
}

export const initialStateAuth: ProductState = {
    data: null,
    loading: false,
    error: null,
    page: 0
}

// createAsyncThunk để gọi API async
export const getProducts = createAsyncThunk<IProduct[], void, { rejectValue: string }>(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            const response = await res.json();
            if (!response.success) {
                return null;
            }
            return response.data.result as IProduct[];
        } catch (err) {
            console.log(err)
            return null;
        }
    }
)

const userSlice = createSlice({
    name: 'products',
    initialState: initialStateAuth,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false

                if (action.payload && action.payload.length > 0) {
                    state.data = action.payload
                    state.error = null
                } else {
                    state.data = []
                    state.error = 'Không có dữ liệu sản phẩm'
                }
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Không có dữ liệu sản phẩm'
                state.data = null
            })
    },
})

export default userSlice.reducer
