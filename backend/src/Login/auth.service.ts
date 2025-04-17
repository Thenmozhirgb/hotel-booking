// src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from 'src/register/schema/register.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Register.name) private readonly registerModel: Model<Register>,
    private readonly jwtService: JwtService, // Inject JwtService for token generation
  ) {}
  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.registerModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT
    const payload = { email: user.email, sub: user._id }; // Sub is the user ID
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
