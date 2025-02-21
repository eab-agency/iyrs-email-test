import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import Email from "../../emails/rfi-submit";
import type { PersonProps } from "@/common/components/FormModal";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(person: PersonProps) {
  // Render the email with the provided person data
  const emailHtml = await render(<Email person={person} />);

  const options = {
    from: "example@reversetype.dev",
    to: person.email,
    subject: "Thanks for submitting your information",
    html: emailHtml,
  };

  // Send the email
  return sendgrid.send(options);
}
