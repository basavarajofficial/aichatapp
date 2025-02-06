// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt"; // Utility for JWT verification
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only apply middleware on protected routes
  if (path.startsWith("/chat")) {
    try {
      // Get token from cookies
      const token = cookies().get("token")?.value;
      if (!token) throw new Error("No token provided");

      // Verify token
      await verifyToken(token);
      return NextResponse.next();
    } catch (error) {
      console.error("Authentication error:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/chat/:path*"], // Ensures all subpaths under /chat are protected

};
