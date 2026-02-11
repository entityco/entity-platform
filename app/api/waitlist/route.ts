import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Entity Waitlist <onboarding@resend.dev>",
        to: "anjulbhatia2003@gmail.com",
        subject: `New waitlist signup: ${email}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #10b981;">New Entity Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              Sent from Entity's waitlist form
            </p>
          </div>
        `,
      });
    } else {
      console.log(`[DEV] Waitlist signup: ${email}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
