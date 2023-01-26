// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  token?: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;
  if (username !== 'admin' || password !== 'admin') {
    return res
      .status(401)
      .json({ message: 'Username and password both must be admin.' });
  }
  res
    .status(200)
    .json({ token: 'SECRET_TOKEN', message: 'Successfully logged in.' });
}
