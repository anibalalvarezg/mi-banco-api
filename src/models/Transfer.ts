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
        lowercase: true
    },
    rut: {
        type: String,
        lowercase: true
    },
    accountType: {
        type: String,
        lowercase: true
    },
    ammount: {
        type: Number,
        lowercase: true
    },
    recipientId: {
        type: String,
        lowercase: true
    },
    userId: {
        type: String,
        lowercase: true
    },

}, {
    timestamps: true
});


export default model<ITransfer>('Transfer', transferSchema);