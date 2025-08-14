export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center content-center items-center h-screen">
            {children}
        </div>
    );
}