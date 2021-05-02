import { Schema, model, Document } from 'mongoose'

export interface ITransfer extends Document {
    name: string;
    rut: string;
    accountType: string;
    ammount: string;
    recipientId: string;
    userId: string;
};

const transferSchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true
    },
    rut: {
        type: String,
        unique: true,
        lowercase: true
    },
    accountType: {
        type: String,
        unique: true,
        lowercase: true
    },
    ammount: {
        type: Number,
        unique: true,
        lowercase: true
    },
    recipientId: {
        type: String,
        unique: true,
        lowercase: true
    },
    userId: {
        type: String,
        unique: true,
        lowercase: true
    },

}, {
    timestamps: true
});


export default model<ITransfer>('Transfer', transferSchema);