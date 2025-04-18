import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  // const token = localStorage.get("token")?.value;
  const userRole = request.cookies.get("userRole")?.value;
  console.log(token);
  const protectedRoutes = ["/dashboard", "/", "/shop"];

  const publicRoutes = ["/login", "/register"];

  const currentPath = request.nextUrl.pathname;

  if (protectedRoutes.includes(currentPath)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (currentPath === "/dashboard" && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    if (currentPath === "/shop" && userRole !== "USER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  if (publicRoutes.includes(currentPath) && token) {
    if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (userRole === "USER") {
      return NextResponse.redirect(new URL("/shop", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/", "/shop", "/login", "/register"],
};
