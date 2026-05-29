export async function POST(request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!webhookUrl) {
      return Response.json(
        { success: false, error: "Google Sheet webhook URL is missing." },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return Response.json(
        { success: false, error: "Failed to save lead." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Lead saved successfully.",
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}