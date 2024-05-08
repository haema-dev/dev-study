// pages/api/users.js
import dbConnect from '../../src/db';
import User from '../../src/User';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === 'POST') {
        try {
            const { id, name } = req.body;
            const user = await User.create({ id, name });
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('서버 오류');
        }
    } else {
        // POST 메서드가 아닐 경우 405 Method Not Allowed 응답을 보냅니다.
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
