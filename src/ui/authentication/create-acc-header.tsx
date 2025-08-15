import { lusitana } from '@/ui/fonts';

export function CreateAccountHeader() {
    return (
        <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold text-text-primary mb-2 ${lusitana.className}`}>
                Let's create your account.
            </h1>
            <p className="text-text-secondary text-sm">
                With a few simple steps, you can enjoy all the benefits of our platform.
            </p>
        </div>
    );
}
