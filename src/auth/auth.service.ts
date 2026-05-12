import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    async getSignup(body: any){
        const hashedPassword = await bcrypt.hash(body.password, 10);
        return{
            email: body.email,
            password: hashedPassword,
        };
    }
}
