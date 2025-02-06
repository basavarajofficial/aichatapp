import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { cookies } from "next/headers";



export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Dummy user (Replace this with DB)
    const hashedPassword = await bcrypt.hash("abc123", 10);
    const users = [{ id: 1, email: "user@example.com", password: hashedPassword }];

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
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/",
    });

    const { password: userPassword, ...userdata} = user;
    console.log(userPassword);

    // Optionally, set the token in localStorage as well
    req.headers.set('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
    return NextResponse.json({ message: "Login successful!!!", userdata }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
