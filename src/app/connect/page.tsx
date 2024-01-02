import UnderDevelopment from "@/components/route/UnderDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Connect | Srivarshan',
    description: '',
};

export default function Connect() {
    return (
        <main className="w-screen min-h-screen bg-base-100 relative">
            <UnderDevelopment />
        </main>
    )
}
