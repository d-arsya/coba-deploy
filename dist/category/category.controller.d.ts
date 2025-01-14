import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(request: any, createCategoryDto: CreateCategoryDto): Promise<{
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
        };
        message: string;
    }>;
    update(request: any, id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
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
