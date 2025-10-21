import { generateAccessToken } from '../lib/paypal';

test('generates access token from paypal', async () => {
    const tokenResponse = await generateAccessToken();

    expect(typeof tokenResponse).toBe('string');
    expect(tokenResponse.length).toBeGreaterThan(0);
});
