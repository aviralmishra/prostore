import {
    cartItemSchema,
    insertCartSchema,
    insertOrderItemSchema,
    insertOrderSchema,
    insertProductSchema,
    paymentResultSchema,
    shippingAddressSchema,
} from '@/lib/validators';

import z from 'zod';

// Product
export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
};

// Cart
export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;

// Shipping Address
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

// Order
export type OrderItem = z.infer<typeof insertOrderItemSchema>;
export type Order = z.infer<typeof insertOrderSchema> & {
    id: string;
    createdAt: Date;
    isPaid: boolean;
    paidAt: Date | null;
    isDelivered: boolean;
    deliveredAt: Date | null;
    orderitems: OrderItem[];
    user: { name: string; email: string };
};

// Payment
export type PaymentResult = z.infer<typeof paymentResultSchema>;
