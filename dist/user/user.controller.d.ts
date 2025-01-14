import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    update(request: any, updateUserDto: UpdateUserDto): Promise<{
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
    remove(request: any): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
    }>;
}
