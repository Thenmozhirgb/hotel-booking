import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register } from './schema/register.schema';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/Login/dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('Register') private readonly registerModel: Model<Register>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createRegisterDto: RegisterDto): Promise<Register> {
    const { name, email, password, phone_number } = createRegisterDto;

    // Check if username, email, or phone number already exist
    const existingUser = await this.registerModel.findOne({
      $or: [{ name }, { email }, { phone_number }],
    });

    if (existingUser) {
      throw new Error('Username, email, or phone number already exists');
    }

    // Hash the password before saving it
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user and save to the database
    const newUser = await this.registerModel.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      created_at: new Date(),
    });

    // Return the user object (without password)
    const { password: _, ...result } = newUser.toObject();
    return result;
  }

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
    const payload = { email: user.email, sub: user._id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async getUserByEmail(email: string): Promise<Register> {
    const user = await this.registerModel
      .findOne({ email })
      .select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
