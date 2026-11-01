import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service.js";
import { Roles } from "../auth/guarded/roles.decorator.js";
import { Role } from "../../generated/prisma/enums.js";
import { RolesGuard } from "../auth/guarded/roles.guard.js";
@Controller('dashboard')
@UseGuards(RolesGuard)
export class DashboardController {
    constructor(private readonly servieDashboard: DashboardService) { }
    @Get('customer')
    @Roles(Role.user)
    async getDashboardUsers(@Req() req: any) {
        return this.servieDashboard.getAllDataDashboardUsersService(req.user?.id)
    }

    @Get('/penjual')
    @Roles(Role.penjual)
    async getDashboardPenjualController() {
        return this.servieDashboard.getAllDataDashboardPenjualService()
    }
}