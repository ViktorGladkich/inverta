import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = true; // process.env.MAINTENANCE_MODE === "true";
  const isDev = process.env.NODE_ENV === "development";

  // NEVER block in development (localhost)
  if (isDev || !isMaintenanceMode) {
    return NextResponse.next();
  }

  // Don't redirect if already on maintenance page (avoid infinite loop)
  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  // Allow static assets, API routes, and Next.js internals
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/favicon") ||
    request.nextUrl.pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to maintenance page
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
