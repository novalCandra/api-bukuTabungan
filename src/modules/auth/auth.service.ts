import { Injectable } from "@nestjs/common";
import { RegisterDTO } from "./dto/register-dto.js";
import { LoginDto } from "./dto/login-dto.js";
import { AuthRepository } from "./auth.repository.js";

@Injectable()
export class AuthService {
    constructor(private readonly authrepository: AuthRepository) { }
    async PostLoginServive(createLogin: LoginDto) {
        return await this.authrepository.cretaeLogin(createLogin)
    }

    async PostRegisterServive(createregister: RegisterDTO) {
        return await this.authrepository.createRegister(createregister)
    }
}