import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' // localStorage
import authReducer from './auth/auth_slide'
import productReducer from './product/product_slide'
import cartReducer from './cart/cart_slide'

// Gộp reducer lại
const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer
    // count_product: countProductReducer,
})

// Cấu hình persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'product', 'cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Tạo store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// Tạo persistor
export const persistor = persistStore(store)

// Export types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
