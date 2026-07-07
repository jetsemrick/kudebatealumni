import { NextResponse } from "next/server";

type RsvpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  graduationYear: string;
  guests: string;
  meals: string[];
  saturdayActivities: string[];
  notes: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parsePayload(body: unknown): RsvpPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;
  const firstName =
    typeof data.firstName === "string" ? data.firstName.trim() : "";
  const lastName =
    typeof data.lastName === "string" ? data.lastName.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const guests =
    typeof data.guests === "string" && data.guests.trim()
      ? data.guests.trim()
      : "1";
  const graduationYear =
    typeof data.graduationYear === "string" ? data.graduationYear.trim() : "";
  const notes = typeof data.notes === "string" ? data.notes.trim() : "";
  const meals = Array.isArray(data.meals)
    ? data.meals.filter((meal): meal is string => typeof meal === "string")
    : [];
  const saturdayActivities = Array.isArray(data.saturdayActivities)
    ? data.saturdayActivities.filter(
        (activity): activity is string => typeof activity === "string",
      )
    : [];

  if (!firstName || !lastName || !email || !isValidEmail(email)) {
    return null;
  }

  return {
    firstName,
    lastName,
    email,
    graduationYear,
    guests,
    meals,
    saturdayActivities,
    notes,
  };
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      { error: "RSVP submission is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Please provide a valid first name, last name, and email." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to record your RSVP. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to record your RSVP. Please try again." },
      { status: 502 },
    );
  }
}
