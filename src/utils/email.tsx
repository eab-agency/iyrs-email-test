/* eslint-disable */
import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import Email from "../../emails/rfi-submit";
import type { PersonProps } from "@/common/components/FormModal";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sendgrid.setApiKey(apiKey);

// Debug: log the first few characters of the API key (remove in production)
console.debug("Using SendGrid API key:", apiKey.slice(0, 4));

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
}

export async function sendEmail(person: PersonProps) {
  console.log("🚀 ~ sendEmail ~ person:", person);
  const emailHtml = await render(<Email person={person} />);

  const options = {
    from: "IYRS Office of Admissions <iyrs@reversetype.dev>",
    to: person.email,
    subject: "Take control of your future at IYRS",
    html: emailHtml,
  };

  try {
    console.log("Sending email to", person.email);
    // Await the send call and log the response for further debugging
    const response = await sendgrid.send(options);
    console.log("SendGrid response:", response);
    return response;
  } catch (error: any) {
    console.error("SendGrid Error:", error.response?.body || error);
    throw error;
  }
}
