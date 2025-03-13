// /app/api/enhance/route.ts
import { NextRequest, NextResponse } from "next/server";
import { enhanceText } from "@/app/actions/enhance-text";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const enhancedText = await enhanceText(text);

    return NextResponse.json({ enhancedText });
  } catch (error) {
    console.error("Error enhancing text:", error);
    return NextResponse.json({ error: "Failed to enhance text" }, { status: 500 });
  }
}
