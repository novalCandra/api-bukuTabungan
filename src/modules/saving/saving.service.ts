import { Injectable } from "@nestjs/common";
import { SavingRepository } from "./saving.repository.js";
import { SavingGetDTO } from "./dto/saving.dto.js";

@Injectable()
export class SavingService {
    constructor(private readonly savingrepository: SavingRepository) { }

    async getAllSavingCustomerService(userId: number) {
        return await this.savingrepository.getallsavingCustomerRepository(userId)
    }

    async getallSavingPenjualService() {
        return await this.savingrepository.getAllSavingRepositoryPenjual()
    }

    async postSavingpenjual(createSaving: SavingGetDTO) {
        return await this.savingrepository.postSavingRepositoryPenjual(createSaving)
    }
    

    async putSavingpenjualService(id: number, updateSaving: SavingGetDTO) {
        return await this.savingrepository.PutSavingRepositoryPenjual(id, updateSaving)
    }
    async deleyeSavingPenjualService(id: number) {
        return await this.savingrepository.deleteSavingRepostoryPenjual(id)
    }
}