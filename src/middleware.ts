import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = true;
  const isDev = process.env.NODE_ENV === "development";

  if (isDev || !isMaintenanceMode) {
    return NextResponse.next();
  }

  const previewKey = "inverta2026";

  if (request.nextUrl.searchParams.get("preview") === previewKey) {
    const response = NextResponse.next();
    response.cookies.set("preview_access", "granted", {
      path: "/",
      httpOnly: false,
    });
    return response;
  }

  // Если cookie уже есть — пускаем
  if (request.cookies.get("preview_access")?.value === "granted") {
    return NextResponse.next();
  }

  // Не блокируем maintenance страницу
  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  // Разрешаем статику и API
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
