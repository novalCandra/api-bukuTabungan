import { Injectable } from "@nestjs/common";
import { NotedRepository } from "./noted.repository.js";

@Injectable()
export class NotedService {
    constructor(private readonly notedRepository: NotedRepository) { };

    async getAllNotesCustomersService(userId: number) {
        return await this.notedRepository.getAllNotesCustomers(userId)
    }

    async getAllNotesPenjualService() {
        return await this.notedRepository.getAllNotesPenjual()
    }

    async PostNotedPenjualService(userId: number, notes: string) {
        return await this.notedRepository.PostNotedPenjual(userId, notes)
    }

    async updatePenjualService(id: number, userId: number, notes: string) {
        return await this.notedRepository.updateNotedPenjual(id, userId, notes)
    }

    async deletePenjualService(id: number) {
        return await this.notedRepository.deleteNotedPenjual(id)
    }
}