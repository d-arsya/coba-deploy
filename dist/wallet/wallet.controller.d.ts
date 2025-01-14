import { WalletService } from './wallet.service';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    create(request: any, { name }: {
        name: any;
    }): Promise<{
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
    findAll(request: any): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            userId: string;
        }[];
        message: string;
    }>;
    findOne(request: any, id: string): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            id: string;
            userId: string;
        }[];
        message: string;
    }>;
    update(request: any, id: string, updateCategoryDto: UpdateWalletDto): Promise<{
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
    remove(request: any, id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
