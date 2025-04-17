import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from 'src/Login/dto/login.dto';
export declare class RegisterController {
    private registerService;
    constructor(registerService: RegisterService);
    signUp(createRegisterDto: RegisterDto): Promise<{
        message: string;
        user: import("./schema/register.schema").Register;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: any;
    }>;
    getUserByEmail(email: string): Promise<import("./schema/register.schema").Register>;
}
