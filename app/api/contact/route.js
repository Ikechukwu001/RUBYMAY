import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name    = body?.name?.trim()    || "";
    const email   = body?.email?.trim()   || "";
    const phone   = body?.phone?.trim()   || "";
    const zipcode = body?.zipcode?.trim() || "";
    const message = body?.message?.trim() || "";

    if (!name || !email || !phone || !zipcode || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY on the server." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      return Response.json(
        { error: "Missing RESEND_FROM_EMAIL on the server." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return Response.json(
        { error: "Missing CONTACT_TO_EMAIL on the server." },
        { status: 500 }
      );
    }

    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safePhone   = escapeHtml(phone);
    const safeZipcode = escapeHtml(zipcode);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL,
      to:      [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New Booking Request • Rose May Therapeutics`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background: #f9f7f5;
          padding: 40px 20px;
          color: #1a1612;
        ">
          <div style="
            max-width: 640px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e8e2da;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.07);
          ">

            <!-- Top -->
            <div style="
              background: #f9f7f5;
              padding: 32px 32px 26px;
              border-bottom: 1px solid #e8e2da;
            ">
              <p style="
                margin: 0;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.32em;
                color: #c4622d;
                font-weight: 600;
              ">
                New Booking Request
              </p>

              <h1 style="
                margin: 14px 0 8px;
                font-size: 28px;
                line-height: 1.2;
                font-weight: 600;
                color: #1a1612;
              ">
                Rose May Therapeutics
              </h1>

              <p style="
                margin: 0;
                color: #6b6259;
                font-size: 14px;
                line-height: 1.7;
              ">
                A new booking request has been submitted through the website.
              </p>
            </div>

            <!-- Body -->
            <div style="padding: 30px 32px;">

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    width: 130px;
                    color: #9e9389;
                    font-size: 13px;
                  ">Name</td>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    font-size: 14px;
                    color: #1a1612;
                    font-weight: 500;
                  ">${safeName}</td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    color: #9e9389;
                    font-size: 13px;
                  ">Email</td>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    font-size: 14px;
                    color: #1a1612;
                    font-weight: 500;
                  ">${safeEmail}</td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    color: #9e9389;
                    font-size: 13px;
                  ">Phone</td>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    font-size: 14px;
                    color: #1a1612;
                    font-weight: 500;
                  ">${safePhone}</td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    color: #9e9389;
                    font-size: 13px;
                  ">Zip Code</td>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #e8e2da;
                    font-size: 14px;
                    color: #1a1612;
                    font-weight: 500;
                  ">${safeZipcode}</td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-top: 28px;">
                <p style="
                  margin: 0 0 10px;
                  color: #9e9389;
                  font-size: 13px;
                  text-transform: uppercase;
                  letter-spacing: 0.22em;
                ">
                  Booking Notes
                </p>
                <div style="
                  background: #f9f7f5;
                  border: 1px solid #e8e2da;
                  border-radius: 14px;
                  padding: 18px;
                  font-size: 14px;
                  line-height: 1.8;
                  color: #1a1612;
                ">
                  ${safeMessage}
                </div>
              </div>

              <!-- Accent line -->
              <div style="
                margin-top: 20px;
                height: 2px;
                width: 40px;
                background: #c4622d;
                border-radius: 999px;
              "></div>

              <!-- Footer note -->
              <div style="
                margin-top: 28px;
                padding-top: 20px;
                border-top: 1px solid #e8e2da;
              ">
                <p style="
                  margin: 0;
                  font-size: 12px;
                  color: #9e9389;
                  line-height: 1.7;
                ">
                  This booking request was sent from the Rose May Therapeutics website contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,

      text: `
New Booking Request • Rose May Therapeutics

Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Zip Code: ${zipcode}

Booking Notes:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json(
        { error: error.message || "Failed to send message." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Your booking request has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}