import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto/signup.dto';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService){}

    async getSignup(body: SignupDto){

        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = await this.prisma.user.create({
            data:{
                fullname: body.fullname,
                email: body.email,
                password: hashedPassword,
            },
        });

        return user;
    }
}
