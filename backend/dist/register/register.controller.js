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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("../Login/dto/login.dto");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    async signUp(createRegisterDto) {
        try {
            const newUser = await this.registerService.createUser(createRegisterDto);
            return { message: 'User registered successfully', user: newUser };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Failed to register user');
        }
    }
    async login(loginDto) {
        const { accessToken } = await this.registerService.login(loginDto);
        return { accessToken };
    }
    async getUserByEmail(email) {
        if (!email) {
            throw new Error('Email parameter is required');
        }
        const user = await this.registerService.getUserByEmail(email);
        return user;
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "getUserByEmail", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map