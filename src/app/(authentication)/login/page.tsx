'use client';

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/ui/button';
import { useActionState, Suspense } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import { LoginHeader } from '../../../ui/authentication/login-header';
import { EmailInput, PasswordInput } from '../../../ui/authentication/custom-input';
import Link from 'next/link';


function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="w-full max-w-md mx-auto bg-surface-elevated md:rounded-2xl md:shadow-md p-8 md:p-8">
      {/* Login Welcome Header */}
      <LoginHeader />
      <form action={formAction} className="space-y-3">

        {/* E-Mail */}
        <EmailInput />
        <div className="h-1"></div>

        {/* Password */}
        <PasswordInput className="mt-4" />

        {/* Error */}
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>

        {/* Forget Password */}
        {/* <div className="flex justify-end mt-4">
          <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div> */}

        {/* Others */}
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="h-12 w-full px-4 py-2" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        

        {/* Dont have an account, sign Up */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <Link href="/create-account" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>

  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}