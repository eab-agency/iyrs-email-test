// const sparkpostClient = new SparkPost(process.env.SPARKPOST_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  message: string;
}

export async function sendEmail({ to, from, subject, message }: EmailParams) {
  // const emailData = {
  //   recipients: [{ address: to }],
  //   content: {
  //     from: from,
  //     subject: subject,
  //     text: message,
  //   },
  // };
  // try {
  //   const response = await sparkpostClient.transmissions.send({
  //     content: emailData.content,
  //     recipients: emailData.recipients,
  //   });
  //   console.log("Email sent successfully:", response);
  //   return response;
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   throw error;
  // }
}
