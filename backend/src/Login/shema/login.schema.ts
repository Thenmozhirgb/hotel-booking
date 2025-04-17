import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Login {
  @Prop()
  email: string;
}
export const LoginSchema = SchemaFactory.createForClass(Login);
