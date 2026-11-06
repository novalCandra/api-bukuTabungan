import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { SavingGetDTO } from "./dto/saving.dto.js";
import { CreateOrPutSaving } from "./dto/create.saving.dto.js";

@Injectable()
export class SavingRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async getallsavingCustomerRepository(getDataSaving: SavingGetDTO) {
        const data = await this.databaseService.savings.findMany({
            where: {
                userId: getDataSaving.userId
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
        return {
            status: 200,
            message: `Get All data Saving customer`,
            data: {
                ...data
            }
        }
    }

    async getAllSavingRepositoryPenjual() {
        return await this.databaseService.savings.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
    }

    async postSavingRepositoryPenjual(createSaving: CreateOrPutSaving) {
        return await this.databaseService.savings.create({
            data: {
                userId: createSaving.user.id,
                balance: createSaving.balance,
                widrawalAmount: createSaving.widrawalAmount,
                Date: createSaving.Date
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
    }

    async PutSavingRepositoryPenjual(id: number, createSaving: CreateOrPutSaving) {
        const data = await this.databaseService.savings.update({
            where: {
                id
            },
            data: {
                userId: createSaving.user.id,
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