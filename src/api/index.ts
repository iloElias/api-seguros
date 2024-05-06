import express from 'express';

import users from './users';
import credit from './credit';

const router = express.Router();

router.use('/credit', credit);
router.use('/users', users);

export default router;
