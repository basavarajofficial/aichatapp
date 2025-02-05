import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Allow OPTIONS requests (important for CORS)
  if (req.method === "OPTIONS") {
    return NextResponse.next();
  }

  // Redirect to login if token is missing or invalid
  if (!token || !verifyToken(token)) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirected", "true"); // Optional: Add a query parameter
    return NextResponse.redirect(loginUrl);
  }

  // Continue to the requested route
  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*"], // Middleware runs for /dashboard and all subroutes
};
