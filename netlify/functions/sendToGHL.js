export const handler = async (event) => {
  try {
    const { name, email, date, time } = JSON.parse(event.body || "{}");

    if (!name || !email || !date || !time) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing required fields" }),
      };
    }

    // ✅ Your GHL form endpoint
    const ghlFormUrl =
      "https://api.leadconnectorhq.com/widget/form/kT9bldu3RLe40kPsMwrj";

    // ✅ Match EXACT "Unique Key" / "Query Key" from your GHL form builder
    const formBody = new URLSearchParams({
      full_name: name, // ✅ matches Query Key "full_name"
      email: email, // ✅ matches Query Key "email"
      "contact.appointment_date": date, // ✅ matches Unique Key "contact.appointment_date"
      "contact.appointment_time": time, // ✅ matches Unique Key "contact.appointment_time"
    });

    // ✅ Send to GoHighLevel server-side (no CORS issues)
    const response = await fetch(ghlFormUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: "https://jade-treacle-f5be45.netlify.app/",
        Origin: "https://jade-treacle-f5be45.netlify.app",
      },
      body: formBody.toString(),
    });

    const text = await response.text();
    console.log("📨 GHL response preview:", text.slice(0, 300));

    if (!response.ok) {
      console.error("❌ GHL returned:", response.status, text);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          success: false,
          error: `GHL returned ${response.status}`,
          details: text,
        }),
      };
    }

    console.log("✅ Successfully sent booking to GHL!");
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("🚨 Netlify Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || "Internal Server Error",
      }),
    };
  }
};
