import { createRecipient } from '../controller/recipient.controller';
import { Router } from 'express';
import { verifyToken } from '../middleware/validateToken';

const router: Router = Router();

router.post('/new-recipient', verifyToken, createRecipient);
// router.post('/signin', signIn);
// router.get('/profile', verifyToken, profile);

export default router;