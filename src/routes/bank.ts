import { createRecipient, getAllRecipients } from '../controller/recipient.controller';
import { Router } from 'express';
import { verifyToken } from '../middleware/validateToken';
import { getAllAccounts } from '../controller/account.controller';

const router: Router = Router();

router.post('/new-recipient', verifyToken, createRecipient);
router.get('/recipients', verifyToken, getAllRecipients);

router.get('/accounts', verifyToken, getAllAccounts);
// router.post('/signin', signIn);
// router.get('/profile', verifyToken, profile);

export default router;