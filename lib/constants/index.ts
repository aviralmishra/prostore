// App
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore';
export const APP_DESCRIPTION =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Shopping redefined...';
export const SERVER_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

// Payment
export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
    ? process.env.PAYMENT_METHODS.split(',')
    : ['PayPal', 'CashOnDelivery'];

export const DEFAULT_PAYMENT_METHOD =
    process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';

// Fetch
export const LATEST_PRODUCTS_LIMIT =
    Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

// Form default values
export const signInDefaultValues = {
    email: '',
    password: '',
};

export const shippingAddressDefaultValues = {
    fullName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
};

export const productDefaultValues = {
    name: '',
    slug: '',
    category: '',
    images: [],
    brand: '',
    description: '',
    price: '0',
    stock: 0,
    rating: '0',
    numReviews: '0',
    isFeatured: false,
    banner: null,
};

// Review
export const reviewDefaultValues = {
    title: '',
    comment: '',
    rating: 0,
};

// User
export const USER_ROLES = process.env.USER_ROLES
    ? process.env.USER_ROLES.split(', ')
    : ['admin', 'user'];

// Email
export const SENDER_EMAIL = process.env.SENDER_EMAIL;
