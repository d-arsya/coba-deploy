import { UserService } from '../user/user.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { JwtService } from '@nestjs/jwt';
interface SignInDto {
    email: string;
    password: string;
}
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(data: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(signUpUserDto: SignUpUserDto): Promise<any>;
}
export {};
