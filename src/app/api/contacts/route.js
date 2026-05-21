import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company, services, message } = body;

    if (!name || !email || !services || services.length === 0) {
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
        <h2>New LeadsRift Contact Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Services:</strong> ${services.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "Not provided"}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}