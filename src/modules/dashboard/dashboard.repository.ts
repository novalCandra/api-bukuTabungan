import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";

@Injectable()
export class DashboardRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async readDashboardUsers(userId: number) {
        return await this.databaseService.savings.findMany({
            where: {
                user: {
                    id: userId,
                }
            }
        })
    }


    async readDashboardPenjual() {
        const result = await this.databaseService.savings.findMany()
        return result
    }
}