import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("CONTACT API ERROR: Missing RESEND_API_KEY");

      return Response.json(
        { error: "Server email API key is missing." },
        { status: 500 }
      );
    }

    if (!process.env.LEADSRIFT_RECEIVER_EMAIL) {
      console.error("CONTACT API ERROR: Missing LEADSRIFT_RECEIVER_EMAIL");

      return Response.json(
        { error: "Receiver email is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();

    const {
      name = "",
      email = "",
      company = "",
      appointments = "",
      budget = "",
      industry = "",
      message = "",
    } = body;

    if (
      !name.trim() ||
      !email.trim() ||
      !appointments ||
      !budget ||
      !industry
    ) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "LeadsRift <onboarding@resend.dev>",
      to: [process.env.LEADSRIFT_RECEIVER_EMAIL],
      subject: `New LeadsRift Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>New LeadsRift Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Appointments Needed:</strong> ${appointments}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Industry:</strong> ${industry}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message || "Not provided"}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        { error: error.message || "Email failed to send." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}