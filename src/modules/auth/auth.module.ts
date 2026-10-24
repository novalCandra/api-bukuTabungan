import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { DatabaseModule } from "../../infrastructure/database/database.module.js";
import { AuthRepository } from "./auth.repository.js";
import { PasswordHasher } from "@nestjs/authentication";

@Module({
    providers: [AuthService, AuthRepository, {
        provide : PasswordHasher, useFactory : () => new PasswordHasher(),
    }],
    exports: [AuthService],
    controllers: [AuthController],
    imports : [DatabaseModule]
})

export class AuthModule { }