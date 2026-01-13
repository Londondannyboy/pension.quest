'use client';

import { createAuthClient } from '@neondatabase/auth/next';

// Only create auth client if NEON_AUTH_BASE_URL is configured
const hasNeonAuth = typeof window !== 'undefined' || process.env.NEON_AUTH_BASE_URL;

export const authClient = hasNeonAuth ? createAuthClient() : null;
