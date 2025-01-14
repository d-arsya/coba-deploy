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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt_1 = require("bcrypt");
const library_1 = require("@prisma/client/runtime/library");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(signUpUserDto) {
        if (signUpUserDto.password) {
            signUpUserDto.password = await (0, bcrypt_1.hash)(signUpUserDto.password, 12);
        }
        try {
            const user = await this.prisma.user.create({ data: signUpUserDto });
            return {
                status: true,
                code: 201,
                data: { name: user.name, email: user.email },
                message: 'User created successfully'
            };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    return {
                        status: false,
                        code: 400,
                        data: null,
                        message: 'The email has been taken'
                    };
                }
            }
        }
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.prisma.user.update({
                where: {
                    id
                },
                data: updateUserDto
            });
            const { password, ...result } = user;
            return {
                statusCode: 200,
                success: true,
                data: result,
                message: 'Success update user'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async remove(id) {
        try {
            await this.prisma.user.delete({
                where: {
                    id
                }
            });
            return {
                statusCode: 200,
                success: true,
                message: 'Success delete user'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map