import { createRouteHandler } from 'uploadthing/next';
import { ProstoreFileRouter } from './core';

export const { GET, POST } = createRouteHandler({
    router: ProstoreFileRouter,
});
