"use client"
import { ThemeProvider } from '@/hooks/ThemeProvider'
import TRPCProvider from './_trpc/TRPCProvider'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <TRPCProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </TRPCProvider>
            </body>
        </html>
    )
}
