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
