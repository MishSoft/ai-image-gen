import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt: string };

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    // შემოწმება, რომ response.data არსებობს და არ არის ცარიელი მასივი
    if (!response.data || response.data.length === 0 || !response.data[0].url) {
      return NextResponse.json(
        { error: "No image URL returned from OpenAI" },
        { status: 500 }
      );
    }

    const imageUrl = response.data[0].url;

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    // დეტალური ტიპის გარეშე, უბრალოდ `unknown` უნდა იყოს
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    console.error("OpenAI Image Generation error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
