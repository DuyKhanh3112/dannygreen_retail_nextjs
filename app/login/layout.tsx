import { AuthProvider } from "../../context/auth/authContext"


export default function LoginLayout({
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