import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { cookies } from "next/headers";

// Dummy user (Replace this with DB)
const hashedPassword = await bcrypt.hash("abc123", 10);
const users = [{ id: 1, email: "user@example.com", password: hashedPassword }];

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = users.find((u) => u.email === email);

    if (!user || !user.password){
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    //  Await the generated token
    const token = await generateToken({ id: user.id, email: user.email });

    //  Set the token as a cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/",
    });

    return NextResponse.json({ message: "Login successful!!!" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
