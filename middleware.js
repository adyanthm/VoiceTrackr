import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
