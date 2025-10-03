'use server';

import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '@/lib/utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

/**
 * Get latest products from database
 *
 * @returns products list
 */
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' },
    });

    return convertToPlainObject(data);
}

/**
 * Get products by slug
 *
 * @returns product
 */
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({ where: { slug: slug } });
}
