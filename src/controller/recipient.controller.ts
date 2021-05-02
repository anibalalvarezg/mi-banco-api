import { Request, Response } from 'express';
import Recipient, { IRecipient } from '../models/Recipient';

export const createRecipient = (req: Request, res: Response) => {
    const {
        name,
        rut,
        email,
        phone,
        bank,
        account,
        accountType,
        userId,
    } = req.body;

    const recipient: IRecipient = new Recipient({
        name,
        rut,
        email,
        phone,
        bank,
        account,
        accountType,
        userId,
    });

    try {
        const newRecipient = recipient.save();
        res.send({ error: null, data: recipient });

    } catch(error) {
        res.status(400).json({error: 1, message: 'Insert data error'});
    }

}