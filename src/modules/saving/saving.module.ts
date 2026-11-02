import {MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SavingController } from "./saving.controller.js";
import { SavingRepository } from "./saving.repository.js";
import { SavingService } from "./saving.service.js";
import { JwtModule } from "@nestjs/jwt";
import { AuthMiddleware } from "../auth/middleware/auth.middleware.js";

@Module({
    controllers: [SavingController],
    exports: [SavingService],
    imports: [JwtModule.register({})],
    providers: [SavingService, SavingRepository]
})
export class SavingModule  implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(SavingController)
    }
}