import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto/signup.dto';
import { LoginDto } from './dto/login.dto/login.dto';


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

    async login(body: LoginDto){

        const user = this.prisma.user.findUnique({
            where:{
                email: body.email,
            },
        });

        if(!user) {
            throw new Error('user not found');
        }

        const IsPasswordMatched = await bcrypt.compare(
            body.password,
            user.password,  

            
        );

        if(!IsPasswordMatched){
            throw new Error('password incorrect');
        }

        return{
            message: 'login successful',
            user,
        };


    }
}
