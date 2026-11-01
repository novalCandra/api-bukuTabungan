import { Injectable } from "@nestjs/common";
import { DashboardRepository } from "./dashboard.repository.js";

@Injectable()
export class DashboardService {
    constructor(private readonly repositoryDashboard: DashboardRepository) { }

    async getAllDataDashboardUsersService(userId: number) {
        return this.repositoryDashboard.readDashboardUsers(userId)
    }

    async getAllDataDashboardPenjualService() {
        return this.repositoryDashboard.readDashboardPenjual()
    }
}