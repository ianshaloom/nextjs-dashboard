'use client';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { CreateAccountHeader } from '../../ui/authentication/create-acc-header';
import { EmailInput, PasswordInput, TextInput } from '../../ui/authentication/custom-input';
import Link from 'next/link';
import { createAccount, CreateAccountState } from '@/app/lib/actions';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function CreateAccountPage() {
    const initialState: CreateAccountState = { message: null, errors: {} };
    const [state, formAction, isPending] = useActionState(createAccount, initialState);

    return (
        <div className="w-full max-w-md mx-auto bg-surface-elevated md:rounded-2xl md:shadow-md p-8 md:p-8">
            <CreateAccountHeader />
            <form action={formAction} className="space-y-3">

                {/* First Name */}
                <TextInput
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    label="First Name"
                // required={true}
                />
                <div id='first-name-error' aria-live="polite" aria-atomic="true">
                    {state?.errors?.firstName &&
                        state.errors.firstName.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                </div>


                {/* Last Name */}
                <TextInput
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    label="Last Name"
                    // required={true}
                    className="mt-4"
                />
                <div id='last-name-error' aria-live="polite" aria-atomic="true">
                    {state?.errors?.lastName &&
                        state.errors.lastName.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                </div>

                {/* Email */}
                <EmailInput className="mt-4" />
                {state?.errors?.email && (
                    <div id='email-error' aria-live="polite" aria-atomic="true">
                        {state.errors.email.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                    </div>
                )}

                {/* Password */}
                <PasswordInput className="mt-4" />
                {state?.errors?.password && (
                    <div id='password-error' aria-live="polite" aria-atomic="true">
                        {state.errors.password.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                    </div>
                )}

                {/* Error Message */}
                <div id='error-message' className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                    {state?.message && (
                        <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{state.message}</p>
                        </>
                    )}
                </div>

                {/* Create Account Button */}
                {/* <input type="hidden" name="redirectTo" value={callbackUrl} /> */}
                <div className="mt-6">
                    <Button className="h-12 w-full px-4 py-2" type="submit" aria-disabled={isPending}>
                        {isPending ? 'Creating Account...' : 'Create Account'}
                        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                    </Button>
                </div>

                {/* Already have an account, login */}
                <div className="flex justify-center mt-4">
                    <p className="text-sm text-text-secondary">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

/* export default function CreateAccountPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateAccountForm />
        </Suspense>
    );
} */