import { Model } from 'mongoose';
import { Register } from './schema/register.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from 'src/Login/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class RegisterService {
    private readonly registerModel;
    private readonly jwtService;
    constructor(registerModel: Model<Register>, jwtService: JwtService);
    createUser(createRegisterDto: RegisterDto): Promise<Register>;
    login(loginDto: LoginDto): Promise<any>;
    getUserByEmail(email: string): Promise<Register>;
}
