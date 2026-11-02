import { Injectable } from "@nestjs/common";
import { NotedRepository } from "./noted.repository.js";
import { CreateNotedDto } from "./dto/create.noted.dto.js";
import { UpdateDtoNotes } from "./dto/update.noted.dto.js";

@Injectable()
export class NotedService {
    constructor(private readonly notedRepository: NotedRepository) { };

    async getAllNotesCustomersService(userId: number) {
        return await this.notedRepository.getAllNotesCustomers(userId)
    }

    async getAllNotesPenjualService() {
        return await this.notedRepository.getAllNotesPenjual()
    }

    async PostNotedPenjualService(createDto: CreateNotedDto) {
        return await this.notedRepository.PostNotedPenjual({ userId: createDto.userId, notes: createDto.notes })
    }

    async updatePenjualService(id: number, updateDto: UpdateDtoNotes) {
        return await this.notedRepository.updateNotedPenjual(id, updateDto.userId, updateDto.notes)
    }

    async deletePenjualService(id: number) {
        return await this.notedRepository.deleteNotedPenjual(id)
    }
}