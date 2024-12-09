import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/lib/mongoose';
import Students from '@/app/models/Students';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { firstname, lastname, role, grade, age } = req.body;

      // Validation
      if (!firstname || !lastname || !role || !grade || age === undefined) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
      }

      // Create a new user
      const user = new User({ firstname, lastname, role, grade, age });
      await user.save();

      res.status(201).json({ success: true, message: 'User added successfully!', user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
