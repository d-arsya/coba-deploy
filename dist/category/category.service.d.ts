import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
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
        };
        message: string;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, userId: string): Promise<{
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
