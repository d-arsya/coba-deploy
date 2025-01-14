import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { SignUpUserDto } from '../auth/dto/sign-up-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(signUpUserDto: SignUpUserDto): Promise<{
        status: boolean;
        code: number;
        data: {
            name: string;
            email: string;
        };
        message: string;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        email: string;
        password: string | null;
        avatar: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        statusCode: number;
        success: boolean;
        data: {
            name: string;
            email: string;
            avatar: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
