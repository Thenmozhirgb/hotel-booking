import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Register {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone_number: string;
  @Prop()
  password?: string;
  @Prop()
  created_at: Date;
}
export const RegisterSchema = SchemaFactory.createForClass(Register);
