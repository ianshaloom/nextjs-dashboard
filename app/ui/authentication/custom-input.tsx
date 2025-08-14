import {
  AtSymbolIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface CustomInputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
  minLength?: number;
  icon: ReactNode;
  className?: string;
}

// Base Custom Input Component
function CustomInput({
  id,
  name,
  type = "text",
  placeholder,
  label,
  required = false,
  minLength,
  icon,
  className
}: CustomInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-text-primary mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            "flex h-12 w-full rounded-xl border border-input-border border-gray-200",
            "px-3 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 transition-all duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
        />
        <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
          {icon}
        </div>
      </div>
    </div>
  );
}

// 1. Email Input
export function EmailInput({
  id = "email",
  name = "email",
  placeholder = "Email address",
  label = "E-Mail",
  required = true,
  className
}: Partial<CustomInputProps>) {
  return (
    <CustomInput
      id={id}
      name={name}
      type="email"
      placeholder={placeholder}
      label={label}
      required={required}
      icon={<AtSymbolIcon className="h-[18px] w-[18px]" />}
      className={className}
    />
  );
}

// 2. Password Input
export function PasswordInput({
  id = "password",
  name = "password",
  placeholder = "••••••••",
  label = "Password",
  required = true,
  minLength = 6,
  className
}: Partial<CustomInputProps>) {
  return (
    <CustomInput
      id={id}
      name={name}
      type="password"
      placeholder={placeholder}
      label={label}
      required={required}
      minLength={minLength}
      icon={<KeyIcon className="h-[18px] w-[18px]" />}
      className={className}
    />
  );
}

// 3. Text Input
export function TextInput({
  id = "text",
  name = "text",
  placeholder = "Enter text",
  label = "Text",
  required = false,
  className
}: Partial<CustomInputProps>) {
  return (
    <CustomInput
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      label={label}
      required={required}
      icon={<UserIcon className="h-[18px] w-[18px]" />}
      className={className}
    />
  );
}