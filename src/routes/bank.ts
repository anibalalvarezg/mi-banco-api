import { createRecipient, getAllRecipients } from '../controller/recipient.controller';
import { Router } from 'express';
import { verifyToken } from '../middleware/validateToken';
import { getAllAccounts } from '../controller/account.controller';
import { getTransferHistory, transfer } from '../controller/transfer.controller';

const router: Router = Router();

router.post('/new-recipient', verifyToken, createRecipient);
router.post('/recipients', verifyToken, getAllRecipients);

router.get('/accounts', verifyToken, getAllAccounts);

router.post('/transfer', verifyToken, transfer);
router.post('/transfer-history', verifyToken, getTransferHistory);

export default router;