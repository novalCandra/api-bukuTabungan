import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { SavingGetDTO } from "./dto/saving.dto.js";
import { STATUS_CODES } from "http";

@Injectable()
export class SavingRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async getallsavingCustomerRepository(userId: number) {
        return await this.databaseService.savings.findMany({
            where: {
                userId: userId
            }
        })
    }

    async getAllSavingRepositoryPenjual() {
        return await this.databaseService.savings.findMany({})
    }

    async postSavingRepositoryPenjual(createSaving: SavingGetDTO) {
        return await this.databaseService.savings.create({
            data: {
                userId: createSaving.userId,
                balance: createSaving.balance,
                widrawalAmount: createSaving.widrawalAmount,
                Date: createSaving.Date
            }
        })
    }

    async PutSavingRepositoryPenjual(id: number, createSaving: SavingGetDTO) {
        const data = await this.databaseService.savings.update({
            where: {
                id
            },
            data: {
                userId: createSaving.userId,
                balance: createSaving.balance,
                widrawalAmount: createSaving.widrawalAmount,
                Date: createSaving.Date
            }
        })

        return {
            STATUS_CODES : 201,
            message: "success update saving",
            data: data
        }
    }
    async deleteSavingRepostoryPenjual(id: number) {
        await this.databaseService.savings.delete({
            where: {
                id
            }
        })
        return {
            message: "success delete saving"
        }
    }
}