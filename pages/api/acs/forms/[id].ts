import { getAccessToken } from "@/utils/token";
import { NextApiRequest, NextApiResponse } from "next";
import type { FormData } from "@/types/Form";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };

  const token = await getAccessToken();

  const response = await fetch(
    `https://go.advance.appily.com/api/forms/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: FormData = await response.json();
  res.status(200).json({ form: data });
};

export default handler;
