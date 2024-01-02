import UnderDevelopment from "@/components/route/UnderDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Works | Srivarshan',
    description: '',
};

export default function Work() {
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <UnderDevelopment />
        </main>
    )
}


