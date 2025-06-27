'use client';

import React, { use, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ReduxProvider from '../components/ReduxProvider';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { getProducts } from '../store/product/product_slide';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>DannyGreen Biomarkt</title>
                <link rel="icon" href="images/logo_dannygreen_biomarkt.png" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />


                <link rel='stylesheet' href='/css/style.css' />
                <link rel='stylesheet' href='/css/home.css' />
                <link rel='stylesheet' href='/css/card.css' />
                <link rel='stylesheet' href='/css/chain.css' />
                <script src="/js/home.js"></script>

            </head>
            <body>
                <ReduxProvider>
                    <LayoutScreen>
                        {children}
                    </LayoutScreen>
                </ReduxProvider>

            </body>
        </html>
    )
}

const LayoutScreen = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(state => state.auth.data);
    useEffect(() => {
        dispatch(getProducts())
    }, []);
    return (
        <div>
            <Header />
            {children}
            <Footer />

        </div>
    )
}