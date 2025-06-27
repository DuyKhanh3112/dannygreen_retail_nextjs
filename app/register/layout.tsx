import { AuthProvider } from "../../context/auth/authContext"


export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}