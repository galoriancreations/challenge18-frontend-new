import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { username, email, password } = body;

  // Simulate simple user validation
  if (!username || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  // Simulate a successful signup response
  return NextResponse.json(
    { message: "User signed up successfully!" },
    { status: 200 }
  );
}
