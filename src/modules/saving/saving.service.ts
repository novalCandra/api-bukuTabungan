import { Injectable } from "@nestjs/common";
import { SavingRepository } from "./saving.repository.js";
import { SavingGetDTO } from "./dto/saving.dto.js";
import { CreateOrPutSaving } from "./dto/create.saving.dto.js";

@Injectable()
export class SavingService {
    constructor(private readonly savingrepository: SavingRepository) { }

    async getAllSavingCustomerService(getDataSaving: SavingGetDTO) {
        return await this.savingrepository.getallsavingCustomerRepository(getDataSaving)
    }

    async getallSavingPenjualService() {
        return await this.savingrepository.getAllSavingRepositoryPenjual()
    }

    async postSavingpenjual(createSaving: CreateOrPutSaving) {
        return await this.savingrepository.postSavingRepositoryPenjual(createSaving)
    }
    

    async putSavingpenjualService(id: number, updateSaving: CreateOrPutSaving) {
        return await this.savingrepository.PutSavingRepositoryPenjual(id, updateSaving)
    }
    async deleyeSavingPenjualService(id: number) {
        return await this.savingrepository.deleteSavingRepostoryPenjual(id)
    }
}