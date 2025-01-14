import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { PrismaService } from '../prisma.service';
export declare class WalletService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createWalletDto: CreateWalletDto): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
        };
        message: string;
    }>;
    findAll(userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            userId: string;
        }[];
        message: string;
    }>;
    findOne(id: string, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            userId: string;
        }[];
        message: string;
    }>;
    update(id: string, updateWalletDto: UpdateWalletDto, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
        };
        message: string;
    }>;
    remove(id: string, userId: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
