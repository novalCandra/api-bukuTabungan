import { Body, Controller, Param, Post } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { RegisterDTO } from "./dto/register-dto.js";
import { LoginDto } from "./dto/login-dto.js";

@Controller()
export class AuthController {
    constructor(private readonly authservice: AuthService) { }
    @Post('/login')
    async PostLoginController(@Param() createLogin: LoginDto) {
        return await this.authservice.PostLoginServive(createLogin)
    }


    @Post('/register')
    async PostRegistercontroller(@Body() createregister: RegisterDTO) {
        return await this.authservice.PostRegisterServive(createregister)
    }
}