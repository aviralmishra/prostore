import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names list
 *
 * @param inputs ClassValue[]
 * @returns string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

//
/**
 * Convert prisma object into a regular JS object
 *
 * @param value
 * @returns JSON
 */
export function convertToPlainObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

/**
 * Format number with decimal places
 *
 * @param num
 * @returns
 */
export function formatNumberWithDecimal(num: number): string {
    const [int, decimal] = num.toString().split('.');
    return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

/**
 * Format error for display
 *
 * @param error
 * @returns formatted error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
    if (error.name === 'ZodError') {
        // Handle Zod error
        const parsedError = JSON.parse(error);
        if (Array.isArray(parsedError) && parsedError.length > 0) {
            return parsedError[0].message;
        } else {
            return parsedError;
        }
    } else if (
        error.name === 'PrismaClientKnownRequestError' &&
        error.code === 'P2002'
    ) {
        // Handle Prisma error
        const field = error.meta?.target ? error.meta.target[0] : 'Field';
        return `${
            field.charAt(0).toUpperCase() + field.slice(1)
        } already exists`;
    } else {
        // Handle other errors
        return typeof error.message === 'string'
            ? error.message
            : JSON.stringify(error.message);
    }
}

/**
 * Round to 2 decimal places
 *
 * @param value
 * @returns rounded value
 */
export function round2(value: number | string) {
    if (typeof value === 'number') {
        return Math.round((value + Number.EPSILON) * 100) / 100;
    } else if (typeof value === 'string') {
        return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
    } else {
        throw new Error('Value is not a number or string');
    }
}

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    currency: 'AUD',
    style: 'currency',
    minimumFractionDigits: 2,
});

/**
 * Format vale as currency
 *
 * @param amount the amount to format
 * @returns
 */
export function formatCurrency(amount: number | string | null) {
    if (typeof amount === 'number') {
        return CURRENCY_FORMATTER.format(amount);
    } else if (typeof amount === 'string') {
        return CURRENCY_FORMATTER.format(Number(amount));
    } else {
        return 'NaN';
    }
}
