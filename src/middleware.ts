import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = true;
  const isDev = process.env.NODE_ENV === "development";

  // если dev — не блокируем
  if (isDev || !isMaintenanceMode) {
    return NextResponse.next();
  }

  // если есть секретный параметр — пускаем
  if (request.nextUrl.searchParams.get("preview") === "inverta2026") {
    return NextResponse.next();
  }

  // не зацикливаемся
  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  // разрешаем статику
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/favicon") ||
    request.nextUrl.pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js)$/)
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};