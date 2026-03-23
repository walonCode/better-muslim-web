import axios from "axios";
import { NextResponse } from "next/server";
import { waitlistRequestSchema } from "@/lib/waitlist";

function escapeFormulaValue(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function getAirtableConfig() {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!token || !baseId || !tableName) {
    return null;
  }

  return { token, baseId, tableName };
}
export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = waitlistRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid waitlist submission.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const airtable = getAirtableConfig();

  if (!airtable) {
    return NextResponse.json(
      {
        error: "Waitlist storage is not configured.",
      },
      { status: 503 },
    );
  }

  const { email, platform, source } = parsed.data;
  const escapedEmail = escapeFormulaValue(email.toLowerCase());
  const escapedPlatform = escapeFormulaValue(platform);
  const tablePath = `https://api.airtable.com/v0/${airtable.baseId}/${encodeURIComponent(
    airtable.tableName,
  )}`;
  const duplicateFormula = `AND(LOWER({Email})='${escapedEmail}', {Platform}='${escapedPlatform}')`;

  try {
    const existingResponse = await axios.get<{
      records?: Array<{ id: string }>;
    }>(tablePath, {
      params: {
        maxRecords: 1,
        filterByFormula: duplicateFormula,
      },
      headers: {
        Authorization: `Bearer ${airtable.token}`,
      },
    });

    if ((existingResponse.data.records?.length ?? 0) > 0) {
      return NextResponse.json({
        ok: true,
        duplicate: true,
        message: "You are already on the waitlist for that platform.",
      });
    }

    await axios.post(
      tablePath,
      {
        records: [
          {
            fields: {
              Email: email,
              Platform: platform,
              Source: source,
              "Created At": new Date().toISOString(),
              Status: "pending",
            },
          },
        ],
        typecast: true,
      },
      {
        headers: {
          Authorization: `Bearer ${airtable.token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json({
      ok: true,
      duplicate: false,
      message: "You have been added to the waitlist.",
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to reach the waitlist right now. Please try again.",
      },
      { status: 502 },
    );
  }
}
