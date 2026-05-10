import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    await connectToDatabase();

    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return NextResponse.json(
        { error: "User Already registered" },
        { status: 400 },
      );
    }

    await User.create({
      email,
      password,
    });

    return NextResponse.json(
      { message: "User registered  Succesfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Registeration error", error);

    return NextResponse.json(
      { message: "Failed to register." },
      { status: 400 },
    );
  }
}
