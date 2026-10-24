import { Injectable, UnauthorizedException } from "@nestjs/common";
import { RegisterDTO } from "./dto/register-dto.js";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { LoginDto } from "./dto/login-dto.js";
import { PasswordHasher } from "@nestjs/authentication"
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthRepository {
    constructor(
        private readonly databaseService: DatabaseService,
        private readonly passwordHash: PasswordHasher,
        private readonly jwtService: JwtService
    ) { }

    async cretaeLogin(createLogin: LoginDto) {
        const user = await this.databaseService.users.findFirst({
            where: {
                email: createLogin.email
            }
        })

        const validtion =  this.passwordHash.verify(createLogin.password, user?.password)!;
        if (!user || !validtion) {
            throw new UnauthorizedException('email is password wromg')
        }

        const acctessToken = await this.jwtService.signAsync({ sub: String(user.id) })

        return {
            data : {
                name :user.name,
                email : user.email
            },
            acctessToken
        }
    }

    async createRegister(createregister: RegisterDTO) {
        const passwordHash = await this.passwordHash.hash(createregister.password)
        return await this.databaseService.users.create({
            data: {
                email : createregister.email,
                name : createregister.email,
                password : passwordHash,
                role : "user"
            }
        })
    }
}