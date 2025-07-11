import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../../interfaces/cart'
import { IOrder } from '../../interfaces/order'

interface CartState {
    data: IOrder | null
    loading: boolean
    error: string | null,
    page?: number,
}


export const initialStateAuth: CartState = {
    data: null,
    loading: false,
    error: null,
    page: 0
}

// createAsyncThunk để gọi API async
export const getCarts = createAsyncThunk<IOrder, { partner_id: number }, { rejectValue: string }>(
    'carts/getCarts',
    async ({ partner_id }, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'partner_id': partner_id
                }),
            });
            const response = await res.json();
            if (!response.success) {
                return null;
            }
            return response.data.result as IOrder;
        } catch (err) {
            console.log(err)
            return null;
        }
    }
)

export const addToCart = createAsyncThunk<boolean, { partner_id: number, product_id: number, add_qty: number, order_id: number }, { rejectValue: string }>(
    'carts/addCarts',
    async ({ partner_id, product_id, add_qty, order_id }, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'partner_id': partner_id,
                    'product_id': product_id,
                    'add_qty': add_qty,
                    'order_id': order_id,
                }),
            });
            const response = await res.json();
            if (!response.success) {
                return true;
            }
            return true;
        } catch (err) {
            console.log(err)
            return false;
        }
    }
)

const cartSlides = createSlice({
    name: 'carts',
    initialState: initialStateAuth,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //get cart
            .addCase(getCarts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.loading = false

                if (action.payload) {
                    state.data = action.payload
                    state.error = null
                } else {
                    state.data = null
                    state.error = 'Không có dữ liệu sản phẩm'
                }
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Không có dữ liệu'
                state.data = null
            })

            //add cart
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                if (!action.payload) {
                    state.error = 'Thêm sản phẩm vào giỏ hàng thất bại';
                } else {
                    state.error = null;
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Lỗi khi thêm sản phẩm vào giỏ hàng';
            })
    },
})

export default cartSlides.reducer
