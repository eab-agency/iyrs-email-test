import { getAccessToken } from "@/utils/token";
import { NextApiRequest, NextApiResponse } from "next";

interface FormResponse {
  // Define the structure of the response data here
  // Example:
  // id: string;
  // name: string;
  // ...
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<FormResponse>
) => {
  const token = await getAccessToken();

  const response = await fetch("https://go.advance.appily.com/api/forms", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // parse the response as json
  const data: FormResponse = await response.json();
  // return the response as json
  res.status(200).json(data);
};

export default handler;
