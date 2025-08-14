import { lusitana } from '@/ui/fonts';

export function LoginHeader() {
    return (
        <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold text-text-primary mb-2 ${lusitana.className}`}>
                Welcome back.
            </h1>
            <p className="text-text-secondary text-sm">
                Discover Limitless Choices and Unmatched Convenience
            </p>
        </div>
    );
}
