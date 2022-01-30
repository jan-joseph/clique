// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFromCollection } from '@firebase/fireStore';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const interests = await readFromCollection('interests');
  res.status(200).json({ interests });
}
