// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Image from "@/models/imageModels";
import connectMongo from "@/lib/connectMongo";
type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connectMongo();
  switch (req.method) {
    case "GET":
      return getImages();
    case "POST":
      return createImage();
    case "DELETE":
      return deleteImage();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getImages() {
    try {
      const images = await Image.find().sort({ createdAt: -1 });
      return res.status(200).json(images);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async function createImage() {
    try {
      const response = await Image.create(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async function deleteImage() {
    try {
      const { id } = req.body;
      const response = await Image.findByIdAndRemove(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
