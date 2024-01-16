"use client"
import { ThemeProvider } from '@/hooks/ThemeProvider'
import TRPCProvider from './_trpc/TRPCProvider'
import './globals.css'
import { Audiowide, Inter, Poppins } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-audiowide',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${audiowide.variable}  ${poppins.variable}`}>
            <body className="w-screen overflow-x-hidden">
                <TRPCProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </TRPCProvider>
            </body>
        </html>
    )
}
