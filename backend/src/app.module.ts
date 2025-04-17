import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from './register/schema/register.schema';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { AuthModule } from './Login/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/hotel-booking'),
    MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema }]),
    JwtModule.register({
      secret: 'your-jwt-secret', // Use a more secure secret in production
      signOptions: { expiresIn: '1h' }, // Set JWT expiration time
    }),
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
