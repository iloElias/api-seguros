import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import credit from './credit';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API SEGUROS',
  });
});

router.use('/credit', credit);

export default router;
