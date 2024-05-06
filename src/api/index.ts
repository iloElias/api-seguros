import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import credit from './credit';

const router = express.Router();

router.get<{}, MessageResponse>('/api/credit', (req, res) => {
  res.json({
    message: 'API SEGUROS',
  });
});

router.use('/api/credit', credit);

export default router;
