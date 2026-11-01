import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DashboardRepository } from "./dashboard.repository.js";
import { DashboardController } from "./dashboard.controller.js";
import { DashboardService } from "./dashboard.service.js";
import { AuthMiddleware } from "../auth/middleware/auth.middleware.js";
import { JwtModule } from "@nestjs/jwt";

@Module({
    controllers: [DashboardController],
    exports: [DashboardService],
    imports: [JwtModule.register({})],
    providers: [DashboardService, DashboardRepository]
})

export class DashboardModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(DashboardController)
    }
}