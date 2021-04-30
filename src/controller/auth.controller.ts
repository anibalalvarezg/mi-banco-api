import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const signUp = async (req: Request, res: Response) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user: IUser = new User({
        email,
        password, 
    });
    user.password = await user.encrypPassword(password);
    try {
        const savedUser = await user.save();
        const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'asd1234');
        res.header('auth-token', token).send({ email, savedUser });
    } catch (error) {
        res.status(400).json({error});
    }
};

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email or password is wrong' });

    const correctPass = await user.validatePassword(password, user.password);
    if(!correctPass) return res.status(400).json({ message: 'Invalid password' });

    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'asd1234', {
        expiresIn: 60 * 60 * 24,
    });

    res.header('auth-token', token).json(user);
};

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({error: 'User not found.'});
    res.json(user);

};