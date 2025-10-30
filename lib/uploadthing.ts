import {
    generateUploadButton,
    generateUploadDropzone,
} from '@uploadthing/react';

import type { ProstoreFileRouterType } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<ProstoreFileRouterType>();
export const UploadDropzone = generateUploadDropzone<ProstoreFileRouterType>();
