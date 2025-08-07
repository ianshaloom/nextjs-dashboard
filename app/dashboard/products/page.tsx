import { lusitana } from "@/app/ui/fonts";


export default function Page() {
    return <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Products
        </h1>
        <p>Manage your products here.</p>
    </main>;
}