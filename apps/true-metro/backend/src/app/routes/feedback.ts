import Router from 'express';
import Feedback from '../models/feedback';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // validate name, email and message
  if (!name || !email || !message) {
    res.status(400).json({ error: true, message: 'Missing required fields' });
  }

  const feedback = new Feedback({ name, email, message });
  await feedback.save();

  res.json({ error: false, message: 'Feedback sent successfully' });
});

export default router;
