import HomePage from "@/components/route/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home | Srivarshan',
    description: 'Unleashing imagination through design, elevating ideas into immersive experiences.',
};

export default function Home() {
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <HomePage />
        </main>
    )
}

