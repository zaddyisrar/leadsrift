import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      appointments,
      budget,
      industry,
      message,
    } = body;

    // updated validation
    if (
      !name ||
      !email ||
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
      from: "LeadsRift <info@leadsrift.com>",

      to: [process.env.LEADSRIFT_RECEIVER_EMAIL],

      subject: `New LeadsRift Inquiry from ${name}`,

      replyTo: email,

      html: `
        <h2>New LeadsRift Inquiry</h2>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Company:</strong> ${
          company || "Not provided"
        }</p>

        <p><strong>Appointments Needed:</strong>
        ${appointments}</p>

        <p><strong>Budget:</strong>
        ${budget}</p>

        <p><strong>Industry:</strong>
        ${industry}</p>

        <p><strong>Message:</strong></p>

        <p>${message || "Not provided"}</p>
      `,
    });

    if (error) {
      return Response.json(
        { error },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}