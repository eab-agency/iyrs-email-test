import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import Email from "../../emails/notion-magic-link";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const emailHtml = await render(<EmailTemplate />);

const options = {
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

sendgrid.send(options);