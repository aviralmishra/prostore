import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import qs from 'query-string';

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

const NUMBER_FORMATTER = new Intl.NumberFormat('en-AU');

/**
 * Formats number
 *
 * @param number number to format
 * @returns
 */
export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number);
}

/**
 * Shorten UUID
 * @param id
 * @returns short uuid
 */
export function formatId(id: string) {
    return `..${id.substring(id.length - 6)}`;
}

/**
 * Format date and times
 * @param dateString
 * @returns formatted date
 */
export const formatDateTime = (dateString: Date) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        month: 'short', // abbreviated month name (e.g., 'Oct')
        year: 'numeric', // numeric year (e.g., '2023')
        day: 'numeric', // numeric day of the month (e.g., '25')
        hour: 'numeric', // numeric hour (e.g., '8')
        minute: 'numeric', // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
        month: 'short', // abbreviated month name (e.g., 'Oct')
        year: 'numeric', // numeric year (e.g., '2023')
        day: 'numeric', // numeric day of the month (e.g., '25')
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric', // numeric hour (e.g., '8')
        minute: 'numeric', // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    };

    const formattedDateTime: string = new Date(dateString).toLocaleString(
        'en-US',
        dateTimeOptions
    );

    const formattedDate: string = new Date(dateString).toLocaleString(
        'en-US',
        dateOptions
    );

    const formattedTime: string = new Date(dateString).toLocaleString(
        'en-US',
        timeOptions
    );

    return {
        dateTime: formattedDateTime,
        dateOnly: formattedDate,
        timeOnly: formattedTime,
    };
};

/**
 * Forms URL Query
 *
 * @param params URL parametrs
 * @returns
 */
export function formUrlQuery({
    params,
    key,
    value,
}: {
    params: string;
    key: string;
    value: string | null;
}) {
    const query = qs.parse(params);
    query[key] = value;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query,
        },
        {
            skipNull: true,
        }
    );
}
