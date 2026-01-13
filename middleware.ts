import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Only apply Neon Auth middleware if configured
const hasNeonAuth = !!process.env.NEXT_PUBLIC_NEON_AUTH_URL;

export default async function middleware(request: NextRequest) {
  if (!hasNeonAuth) {
    // If auth not configured, allow all requests
    return NextResponse.next();
  }

  // Dynamically import and use Neon Auth middleware
  const { neonAuthMiddleware } = await import("@neondatabase/neon-js/auth/next/server");
  const authMiddleware = neonAuthMiddleware({
    loginUrl: "/auth/sign-in",
  });

  return authMiddleware(request);
}

export const config = {
  matcher: ["/account/:path*"],
};
