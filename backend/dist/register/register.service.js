"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let RegisterService = class RegisterService {
    constructor(registerModel, jwtService) {
        this.registerModel = registerModel;
        this.jwtService = jwtService;
    }
    async createUser(createRegisterDto) {
        const { name, email, password, phone_number } = createRegisterDto;
        const existingUser = await this.registerModel.findOne({
            $or: [{ name }, { email }, { phone_number }],
        });
        if (existingUser) {
            throw new Error('Username, email, or phone number already exists');
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await this.registerModel.create({
            name,
            email,
            password: hashedPassword,
            phone_number,
            created_at: new Date(),
        });
        const { password: _, ...result } = newUser.toObject();
        return result;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.registerModel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { email: user.email, sub: user._id };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
    }
    async getUserByEmail(email) {
        const user = await this.registerModel
            .findOne({ email })
            .select('-password');
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Register')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], RegisterService);
//# sourceMappingURL=register.service.js.map