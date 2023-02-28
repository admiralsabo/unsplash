// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Image from "@/models/imageModels";
import { isValidObjectId } from "mongoose";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      return getImage(id as string);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getImage(id: string | string[]) {
    try {
      if (isValidObjectId(id)) {
        const images = await Image.findById(id);
        return res.status(200).json(images);
      }
      return res.status(204).json({ message: "No Data found" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
