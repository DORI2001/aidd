import { streamText, convertToModelMessages } from "ai";
import { buildSystemPrompt } from "@/lib/system-prompt";

export const runtime = "nodejs";

const MAX_MESSAGES = 10;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (messages.length > MAX_MESSAGES) {
    return new Response("Too many messages", { status: 400 });
  }

  const result = streamText({
    model: "google/gemini-2.0-flash",
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
