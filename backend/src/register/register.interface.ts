import { Document } from 'mongoose';

export interface Register extends Document {
  name: string;
  email: string;
  phone_number: string;
  createdAt: Date;
  password: string;
}
