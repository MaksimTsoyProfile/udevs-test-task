import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../sessionOptions';

async function handler(req, res) {
  try {
    req.session.token = req.body;
    await req.session.save()
    res.json(req.body)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);