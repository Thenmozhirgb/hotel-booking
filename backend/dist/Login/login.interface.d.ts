import { Document } from 'mongoose';
export interface Login extends Document {
    email: string;
}
