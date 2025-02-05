import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

// Generate JWT
interface Payload {
    [key: string]: string | number | boolean;
}

export function generateToken(payload: Payload): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

// Verify JWT

export function verifyToken(token: string): boolean {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return !!decoded;
    } catch (error) {
        console.error("JWT Verification Error:", error);
      return false;
    }
  }
