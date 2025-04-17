import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Register } from 'src/register/schema/register.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly registerModel;
    private readonly jwtService;
    constructor(registerModel: Model<Register>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<any>;
}
