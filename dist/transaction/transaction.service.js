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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TransactionService = class TransactionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTransactionDto) {
        const transaction = await this.prisma.transaction.create({ data: createTransactionDto });
        return {
            status: true,
            code: 201,
            data: { name: transaction.name, amount: transaction.amount },
            message: 'Transaction created successfully'
        };
    }
    async findAll(userId) {
        const transactions = await this.prisma.transaction.findMany({
            where: {
                userId
            }
        });
        return {
            statusCode: 200,
            success: true,
            data: transactions,
            message: 'Success retrieve all user transactions'
        };
    }
    async findOne(id, userId) {
        const transaction = await this.prisma.transaction.findFirst({
            where: {
                id,
                userId
            }
        });
        if (transaction) {
            return {
                statusCode: 200,
                success: true,
                data: transaction,
                message: 'Success retrieve transaction'
            };
        }
        throw new common_1.NotFoundException();
    }
    async update(id, updateTransactionDto, userId) {
        try {
            const transaction = await this.prisma.transaction.update({
                where: {
                    id,
                    userId
                },
                data: {
                    ...updateTransactionDto
                }
            });
            return {
                statusCode: 200,
                success: true,
                data: transaction,
                message: 'Success update transaction'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
    async remove(id, userId) {
        try {
            await this.prisma.transaction.delete({
                where: {
                    id,
                    userId
                }
            });
            return {
                statusCode: 200,
                success: true,
                message: 'Success delete transaction'
            };
        }
        catch (error) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map