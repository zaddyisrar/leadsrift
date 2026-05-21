export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company, appointments, budget, industry, message } =
      body;

    if (!name || !email || !appointments || !budget || !industry) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    console.log("NEW LEADSRIFT LEAD:", {
      name,
      email,
      company,
      appointments,
      budget,
      industry,
      message,
    });

    return Response.json({
      success: true,
      message: "Lead received successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}