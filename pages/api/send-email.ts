import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/utils/email"; // adjust the import path as needed
import type { PersonProps } from "@/common/components/FormModal";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const person = req.body as PersonProps; // safely cast request body to PersonProps
    console.log("🚀 ~ person:", person);
    // Call our sendEmail function
    await sendEmail(person);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
