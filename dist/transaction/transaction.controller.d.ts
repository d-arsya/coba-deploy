import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(request: any, createTransactionDto: CreateTransactionDto): Promise<{
        status: boolean;
        code: number;
        data: {
            name: string;
            amount: number;
        };
        message: string;
    }>;
    findAll(request: any): Promise<{
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
    findOne(request: any, id: string): Promise<{
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
    update(request: any, id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
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
    remove(request: any, id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
