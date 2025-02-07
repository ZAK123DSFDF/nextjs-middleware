import { NextResponse } from "next/server";

const isLoggedIn = false;
export function middleware(request: Request) {
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/profile", "/profile/:path*"],
};
