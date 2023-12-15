'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useState } from "react";

import { trpc } from "./client";
import { httpBatchLink } from "@trpc/react-query";

export default function TRPCProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({}))
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: 'https://localhost:3000/api/trpc'
            })
        ]
    }))
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}