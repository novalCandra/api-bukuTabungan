import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { NotedRepository } from "./noted.repository.js";
import { NotedController } from "./noted.controller.js";
import { JwtModule } from "@nestjs/jwt";
import { NotedService } from "./noted.service.js";
import { AuthMiddleware } from "../auth/middleware/auth.middleware.js";

@Module({
    controllers: [NotedController],
    exports: [NotedService],
    imports: [JwtModule.register({})],
    providers: [NotedRepository, NotedService]
})

export class NotedModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(NotedController);
    }
}