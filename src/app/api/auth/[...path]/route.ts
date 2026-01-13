import { NextResponse } from 'next/server';

// Conditionally import and create handler only if NEON_AUTH_BASE_URL is set
const hasNeonAuth = !!process.env.NEON_AUTH_BASE_URL;

let handler: { GET: any; POST: any } | null = null;

if (hasNeonAuth) {
  // Dynamic import to avoid build errors when env var not set
  const { authApiHandler } = require('@neondatabase/auth/next/server');
  handler = authApiHandler();
}

export async function GET(request: Request, context: any) {
  if (!handler) {
    return NextResponse.json(
      { error: 'Neon Auth not configured. Set NEON_AUTH_BASE_URL environment variable.' },
      { status: 503 }
    );
  }
  return handler.GET(request, context);
}

export async function POST(request: Request, context: any) {
  if (!handler) {
    return NextResponse.json(
      { error: 'Neon Auth not configured. Set NEON_AUTH_BASE_URL environment variable.' },
      { status: 503 }
    );
  }
  return handler.POST(request, context);
}
