'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../store'
import LoadingPage from './loadingPage'

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingPage />} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
