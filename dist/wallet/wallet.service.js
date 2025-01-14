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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let WalletService = class WalletService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createWalletDto) {
        const wallet = await this.prisma.wallet.create({ data: createWalletDto });
        return {
            statusCode: 201,
            success: true,
            data: wallet,
            message: 'Success create a wallet'
        };
    }
    async findAll(userId) {
        const wallets = await this.prisma.wallet.findMany({
            where: {
                userId
            },
            select: {
                name: true,
                id: true,
                userId: true
            }
        });
        return {
            statusCode: 200,
            success: true,
            data: wallets,
            message: 'Success retrieve all user wallets'
        };
    }
    async findOne(id, userId) {
        const wallet = await this.prisma.wallet.findMany({
            where: {
                id,
                userId
            },
            select: {
                name: true,
                id: true,
                userId: true
            }
        });
        if (wallet.length) {
            return {
                statusCode: 200,
                success: true,
                data: wallet,
                message: 'Success retrieve wallet'
            };
        }
        throw new common_1.NotFoundException();
    }
    async update(id, updateWalletDto, userId) {
        try {
            const wallet = await this.prisma.wallet.update({
                where: {
                    id,
                    userId
                },
                data: {
                    ...updateWalletDto
                }
            });
            return {
                statusCode: 200,
                success: true,
                data: wallet,
                message: 'Success update wallet'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async remove(id, userId) {
        try {
            await this.prisma.wallet.delete({
                where: {
                    id,
                    userId
                }
            });
            return {
                statusCode: 200,
                success: true,
                message: 'Success delete wallet'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WalletService);
//# sourceMappingURL=wallet.service.js.map