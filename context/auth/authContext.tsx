'use client'

import { createContext, FormEvent, useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hook";
import { RootState } from "../../store";
import { IAuthData } from "../../interfaces/auth";
import { useRouter } from "next/navigation";
import { loginUser, logoutUser, registerUser } from "../../store/auth/auth_slide";
import { getCarts } from "../../store/cart/cart_slide";
import LoadingPage from "../../components/loadingPage";

type AuthContextType = {
    handleLogin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    handleLogout: () => Promise<void>;
    handleRegister: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const auth = useAppSelector((state: RootState) => state.auth.data) as IAuthData | undefined
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fullname = form.fullname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }
        await dispatch(registerUser({
            fullname: fullname,
            phone: phone,
            email: email,
            username: username,
            password: password
        }))

        alert('register success')
        router.push('/login')
    };
    const handleLogout = async () => {
        setLoading(true)
        await dispatch(logoutUser({ sid: auth.session_id ?? '' }));
        setLoading(false)
        router.push('/');

    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        const form = e.currentTarget;
        const username = form.username.value;
        const password = form.password.value;
        const res = await dispatch(loginUser({ username: username, password: password }))
        if (res.payload != null) {
            setLoading(false)
            router.push('/')
        } else {
            form.username.value = '';
            form.password.value = '';
            setLoading(false)
            alert('Login fail !!!')
        }
    };
    const value = {
        handleLogin,
        handleLogout,
        handleRegister
    };
    const getDataCart = async () => {
        setLoading(true)
        const cart = await dispatch(getCarts({ partner_id: auth?.partner_id ?? 0 }))
        setLoading(false)
    }
    useEffect(() => {
        getDataCart()
    }, [auth])


    return (
        <AuthContext.Provider value={value}>
            {loading ? <LoadingPage /> : children}

        </AuthContext.Provider>
    );
};