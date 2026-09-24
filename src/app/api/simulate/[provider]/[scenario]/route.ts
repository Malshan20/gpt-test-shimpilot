import { NextResponse } from "next/server";
import { getScenario } from "@/lib/scenarios";

export async function POST(
  _request: Request,
  context: { params: Promise<{ provider: string; scenario: string }> },
) {
  const { provider, scenario } = await context.params;
  const match = getScenario(provider, scenario);

  if (!match) {
    return NextResponse.json({ error: "Unknown sandbox scenario" }, { status: 404 });
  }

  await new Promise((resolve) => setTimeout(resolve, 420));

  return NextResponse.json({
    ok: true,
    mode: "simulation",
    provider: match.provider,
    scenario: match.id,
    file: match.file,
    expectedSignal: match.expectedSignal,
    note: "No real Stripe/OpenAI request was made. The repository intentionally contains legacy integration fixtures for Shimpilot to scan and migrate.",
  });
}
