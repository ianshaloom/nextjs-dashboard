import { lusitana } from "@/app/ui/fonts";


export default function Page() {
    return <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Orders
        </h1>
        <p>Manage your orders here.</p>
    </main>;
}