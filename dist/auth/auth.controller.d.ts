import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpUserDto: SignUpUserDto): Promise<any>;
    signIn(signInUserDto: SignInUserDto): Promise<{
        access_token: string;
    }>;
}
