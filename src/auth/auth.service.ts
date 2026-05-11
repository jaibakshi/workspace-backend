import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getSignup(){
        return 'singup please';
    }
}
