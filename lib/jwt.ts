import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET as string;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const secret = new TextEncoder().encode(SECRET_KEY!);

// Generate JWT Token
export function generateToken(payload: { id: number; email: string}){
  return new SignJWT(payload)
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setExpirationTime("1h")
  .sign(secret);
}

// Verify JWT Token
export async function verifyToken(token: string){
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return null;
  }
}
