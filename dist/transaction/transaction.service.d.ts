import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from '../prisma.service';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTransactionDto: CreateTransactionDto): Promise<{
        status: boolean;
        code: number;
        data: {
            name: string;
            amount: number;
        };
        message: string;
    }>;
    findAll(userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            type: string;
            description: string;
            amount: number;
            walletId: string;
            categoryId: string;
        }[];
        message: string;
    }>;
    findOne(id: string, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            type: string;
            description: string;
            amount: number;
            walletId: string;
            categoryId: string;
        };
        message: string;
    }>;
    update(id: string, updateTransactionDto: UpdateTransactionDto, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            type: string;
            description: string;
            amount: number;
            walletId: string;
            categoryId: string;
        };
        message: string;
    }>;
    remove(id: string, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
