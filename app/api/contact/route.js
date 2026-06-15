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

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const phone = body?.phone?.trim() || "";
    const zipcode = body?.zipcode?.trim() || "";
    const message = body?.message?.trim() || "";

    // Validation
    if (!name || !email || !phone || !zipcode || !message) {
      return Response.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Environment validation
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          error: "Missing RESEND_API_KEY on the server.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      return Response.json(
        {
          error: "Missing RESEND_FROM_EMAIL on the server.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return Response.json(
        {
          error: "Missing CONTACT_TO_EMAIL on the server.",
        },
        {
          status: 500,
        }
      );
    }

    // Escape fields
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeZipcode = escapeHtml(zipcode);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],

      // Allows direct reply to customer
      replyTo: email,

      subject: `New Booking Request • Rose Linda`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background: #fffafc;
          padding: 40px 20px;
          color: #2b1f24;
        ">
          <div style="
            max-width: 640px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #f3d9df;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(232,138,163,0.12);
          ">

            <!-- Top -->
            <div style="
              background: linear-gradient(to bottom, #fff1f5, #fffafc);
              padding: 32px 32px 26px;
              border-bottom: 1px solid #f3d9df;
            ">
              <p style="
                margin: 0;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.22em;
                color: #e88aa3;
                font-weight: 700;
              ">
                New Booking Request
              </p>

              <h1 style="
                margin: 14px 0 8px;
                font-size: 34px;
                line-height: 1.15;
                font-weight: 600;
                color: #2b1f24;
              ">
                Rose Linda Relax & Renew
              </h1>

              <p style="
                margin: 0;
                color: #7b5d67;
                font-size: 15px;
                line-height: 1.7;
              ">
                A new booking request has been submitted through the website.
              </p>
            </div>

            <!-- Body -->
            <div style="padding: 30px 32px;">
              
              <table style="
                width: 100%;
                border-collapse: collapse;
              ">
                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    width: 130px;
                    color: #a47b86;
                    font-size: 14px;
                  ">
                    Name
                  </td>

                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    font-size: 15px;
                    color: #2b1f24;
                    font-weight: 500;
                  ">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    color: #a47b86;
                    font-size: 14px;
                  ">
                    Email
                  </td>

                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    font-size: 15px;
                    color: #2b1f24;
                    font-weight: 500;
                  ">
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    color: #a47b86;
                    font-size: 14px;
                  ">
                    Phone
                  </td>

                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    font-size: 15px;
                    color: #2b1f24;
                    font-weight: 500;
                  ">
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    color: #a47b86;
                    font-size: 14px;
                  ">
                    Zip Code
                  </td>

                  <td style="
                    padding: 14px 0;
                    border-top: 1px solid #f3d9df;
                    font-size: 15px;
                    color: #2b1f24;
                    font-weight: 500;
                  ">
                    ${safeZipcode}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-top: 30px;">
                <p style="
                  margin: 0 0 10px;
                  color: #a47b86;
                  font-size: 14px;
                ">
                  Booking Notes
                </p>

                <div style="
                  background: #fffafd;
                  border: 1px solid #f3d9df;
                  border-radius: 22px;
                  padding: 18px;
                  font-size: 15px;
                  line-height: 1.8;
                  color: #2b1f24;
                ">
                  ${safeMessage}
                </div>
              </div>

              <!-- Footer -->
              <div style="
                margin-top: 28px;
                padding-top: 22px;
                border-top: 1px solid #f3d9df;
              ">
                <p style="
                  margin: 0;
                  font-size: 13px;
                  color: #a47b86;
                  line-height: 1.7;
                ">
                  This booking request was sent from the website contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,

      text: `
New Booking Request • Rose Linda

Name: ${name}
Email: ${email}
Phone: ${phone}
Zip Code: ${zipcode}

Booking Notes:
${message}
      `.trim(),
    });

    // Resend error
    if (error) {
      console.error("Resend send error:", error);

      return Response.json(
        {
          error: error.message || "Failed to send message.",
        },
        {
          status: 500,
        }
      );
    }

    // Success
    return Response.json(
      {
        success: true,
        message: "Your booking request has been sent successfully.",
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return Response.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}